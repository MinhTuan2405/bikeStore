import { useState, useEffect } from 'react';
import { 
    Card, 
    Row, 
    Col, 
    Statistic, 
    Table, 
    Typography, 
    Spin, 
    message, 
    Divider,
    Progress,
    Tag
} from 'antd';
import { 
    ShopOutlined, 
    UserOutlined, 
    DollarOutlined, 
    ShoppingOutlined, 
    InboxOutlined
} from '@ant-design/icons';
import { Bar, Pie, Column } from '@ant-design/plots';
import api from '../../services/api';

const { Title, Text } = Typography;

export default function ShowroomMetricPage() {
    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState([]);
    const [totalSales, setTotalSales] = useState(0);
    const [totalStock, setTotalStock] = useState(0);
    const [totalStaff, setTotalStaff] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);

    // Tải dữ liệu thống kê
    const fetchMetrics = async () => {
        try {
            setLoading(true);
            const response = await api.get('/showroom/metrics/summary');
            
            setMetrics(response.data);
            
            // Tính toán tổng số liệu
            const sales = response.data.reduce((total, store) => total + parseFloat(store.total_sales || 0), 0);
            const stock = response.data.reduce((total, store) => total + parseInt(store.total_stock || 0), 0);
            const staff = response.data.reduce((total, store) => total + parseInt(store.staff_count || 0), 0);
            const orders = response.data.reduce((total, store) => total + parseInt(store.total_orders || 0), 0);
            
            setTotalSales(sales);
            setTotalStock(stock);
            setTotalStaff(staff);
            setTotalOrders(orders);
            
            setLoading(false);
        } catch (error) {
            console.error('Error fetching showroom metrics:', error);
            message.error('Không thể tải dữ liệu thống kê showroom');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMetrics();
    }, []);

    const formatNumber = (num) => {
        if (isNaN(num)) return '0';
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(2) + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(2) + 'K';
        }
        return num.toFixed(0);
    };

    // Cấu hình biểu đồ doanh thu theo showroom
    const getSalesChartConfig = () => {
        if (!metrics || metrics.length === 0) return {};

        return {
            data: metrics.map(item => ({
                showroom: item.store_name,
                value: parseFloat(item.total_sales || 0)
            })),
            xField: 'showroom',
            yField: 'value',
            autoFit: true,
            padding: 'auto',
            height: 300,
            columnWidthRatio: 0.4,
            color: '#1890ff',
            axis: {
                y: {
                    nice: true,
                    grid: {
                        line: {
                            style: {
                                stroke: '#ddd',
                                lineDash: [4, 2]
                            }
                        }
                    }
                }
            }
        };
    };

    // Cấu hình biểu đồ số lượng sản phẩm theo showroom
    const getProductsChartConfig = () => {
        if (!metrics || metrics.length === 0) return {};

        return {
            data: metrics.map(item => ({
                showroom: item.store_name,
                value: parseInt(item.total_stock || 0)
            })),
            xField: 'showroom',
            yField: 'value',
            autoFit: true,
            padding: 'auto',
            height: 300,
            columnWidthRatio: 0.4,
            color: '#52c41a',
            axis: {
                y: {
                    nice: true,
                    grid: {
                        line: {
                            style: {
                                stroke: '#ddd',
                                lineDash: [4, 2]
                            }
                        }
                    }
                }
            }
        };
    };

    // Cấu hình biểu đồ phân bố nhân viên
    const getStaffDistributionConfig = () => {
        if (!metrics || metrics.length === 0) return {};

        return {
            data: metrics.map(store => ({
                type: store.store_name,
                value: parseInt(store.staff_count || 0)
            })),
            angleField: 'value',
            colorField: 'type',
            radius: 0.8,
            autoFit: true,
            height: 300,
            padding: 'auto',
            legend: {
                position: 'bottom'
            }
        };
    };

    // Định nghĩa các cột trong bảng
    const columns = [
        {
            title: 'Showroom',
            dataIndex: 'store_name',
            key: 'store_name',
            sorter: (a, b) => a.store_name.localeCompare(b.store_name)
        },
        {
            title: 'Số đơn hàng',
            dataIndex: 'total_orders',
            key: 'total_orders',
            sorter: (a, b) => a.total_orders - b.total_orders,
        },
        {
            title: 'Doanh thu',
            key: 'total_sales',
            render: (_, record) => `${parseFloat(record.total_sales || 0).toLocaleString()} VNĐ`,
            sorter: (a, b) => a.total_sales - b.total_sales,
        },
        {
            title: 'Sản phẩm',
            key: 'products',
            render: (_, record) => (
                <>
                    <span>Loại sản phẩm: {record.product_count}</span>
                    <br />
                    <span>Tồn kho: {record.total_stock}</span>
                </>
            )
        },
        {
            title: 'Nhân viên',
            dataIndex: 'staff_count',
            key: 'staff_count',
            sorter: (a, b) => a.staff_count - b.staff_count,
        },
        {
            title: 'Hiệu suất',
            key: 'performance',
            render: (_, record) => {
                // Tính hiệu suất dựa trên doanh thu trên mỗi nhân viên
                const salesPerStaff = parseFloat(record.total_sales || 0) / (parseInt(record.staff_count || 1));
                const maxExpectedSales = 2000000000; // 2 tỷ VNĐ
                const percent = Math.min(Math.round((salesPerStaff / maxExpectedSales) * 100), 100);
                
                let color = 'green';
                if (percent < 30) color = 'red';
                else if (percent < 70) color = 'orange';
                
                return <Progress percent={percent} status="active" strokeColor={color} />;
            },
        },
    ];

    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh' 
            }}>
                <Spin size="large" tip="Đang tải dữ liệu..." />
            </div>
        );
    }

    return (
        <>
            <div style={{ padding: '20px' }}>
                <Title level={2}>Thống kê & Hiệu suất Showroom</Title>
                
                {/* Thông tin tổng quan */}
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Tổng doanh thu"
                                value={totalSales}
                                prefix={<DollarOutlined />}
                                valueStyle={{ color: '#722ed1' }}
                                formatter={value => formatNumber(value) + ' VNĐ'}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Tổng đơn hàng"
                                value={totalOrders}
                                prefix={<ShoppingOutlined />}
                                valueStyle={{ color: '#faad14' }}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Tổng sản phẩm tồn kho"
                                value={totalStock}
                                prefix={<InboxOutlined />}
                                valueStyle={{ color: '#52c41a' }}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Tổng nhân viên"
                                value={totalStaff}
                                prefix={<UserOutlined />}
                                valueStyle={{ color: '#1890ff' }}
                            />
                        </Card>
                    </Col>
                </Row>
                
                {/* Biểu đồ */}
                <Row gutter={16}>
                    <Col span={12}>
                        <Card 
                            title={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <DollarOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                                    <span>Doanh thu theo Showroom</span>
                                </div>
                            } 
                            bodyStyle={{ padding: '12px' }}
                        >
                            <div style={{ width: '100%', height: '300px' }}>
                                <Column {...getSalesChartConfig()} />
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card 
                            title={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <InboxOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                                    <span>Sản phẩm tồn kho theo Showroom</span>
                                </div>
                            }
                            bodyStyle={{ padding: '12px' }}
                        >
                            <div style={{ width: '100%', height: '300px' }}>
                                <Column {...getProductsChartConfig()} />
                            </div>
                        </Card>
                    </Col>
                </Row>
                
                <Row gutter={16} style={{ marginTop: '20px' }}>
                    <Col span={12}>
                        <Card 
                            title={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <UserOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                                    <span>Phân bố nhân viên</span>
                                </div>
                            }
                            bodyStyle={{ padding: '12px' }}
                        >
                            <div style={{ width: '100%', height: '300px' }}>
                                <Pie {...getStaffDistributionConfig()} />
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card 
                            title={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <ShopOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                                    <span>So sánh hiệu suất Showroom</span>
                                </div>
                            }
                            style={{ height: '400px', overflow: 'auto' }}
                        >
                            <div style={{ padding: '10px' }}>
                                {metrics.map(store => {
                                    const salesPerStaff = parseFloat(store.total_sales || 0) / (parseInt(store.staff_count || 1));
                                    const ordersPerStaff = parseInt(store.total_orders || 0) / (parseInt(store.staff_count || 1));
                                    const stockPerStaff = parseInt(store.total_stock || 0) / (parseInt(store.staff_count || 1));
                                    
                                    return (
                                        <div key={store.store_id} style={{ marginBottom: '20px' }}>
                                            <Text strong>{store.store_name}</Text>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Text>Doanh thu/nhân viên:</Text>
                                                <Text>{formatNumber(salesPerStaff)} VNĐ</Text>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Text>Đơn hàng/nhân viên:</Text>
                                                <Text>{Math.round(ordersPerStaff)}</Text>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Text>Sản phẩm tồn kho/nhân viên:</Text>
                                                <Text>{Math.round(stockPerStaff)}</Text>
                                            </div>
                                            <Divider style={{ margin: '10px 0' }} />
                                        </div>
                                    );
                                })}
                            </div>
                        </Card>
                    </Col>
                </Row>
                
                <Divider />
                
                {/* Bảng dữ liệu chi tiết */}
                <Card 
                    title={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ShopOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                            <span>Dữ liệu chi tiết các Showroom</span>
                        </div>
                    }
                >
                    <Table 
                        columns={columns} 
                        dataSource={metrics} 
                        rowKey="store_id"
                        pagination={false}
                    />
                </Card>
                
                <Divider />
                
                {/* Phân tích */}
                <Card title="Phân tích hiệu suất">
                    <Row gutter={16}>
                        <Col span={24}>
                            <Text>
                                Dựa trên dữ liệu hiện tại, showroom có doanh thu cao nhất là 
                                {' '}
                                <Text strong>
                                    {metrics.length > 0 ? metrics.sort((a, b) => parseFloat(b.total_sales || 0) - parseFloat(a.total_sales || 0))[0].store_name : 'N/A'}
                                </Text>
                                {' '}
                                với tổng doanh thu 
                                {' '}
                                <Text strong>
                                    {metrics.length > 0 ? formatNumber(parseFloat(metrics.sort((a, b) => parseFloat(b.total_sales || 0) - parseFloat(a.total_sales || 0))[0].total_sales || 0)) + ' VNĐ' : '0 VNĐ'}
                                </Text>
                                . Showroom có số lượng nhân viên nhiều nhất là 
                                {' '}
                                <Text strong>
                                    {metrics.length > 0 ? metrics.sort((a, b) => parseInt(b.staff_count || 0) - parseInt(a.staff_count || 0))[0].store_name : 'N/A'}
                                </Text>
                                {' '}
                                với 
                                {' '}
                                <Text strong>
                                    {metrics.length > 0 ? parseInt(metrics.sort((a, b) => parseInt(b.staff_count || 0) - parseInt(a.staff_count || 0))[0].staff_count || 0) : 0}
                                </Text>
                                {' '}
                                nhân viên.
                            </Text>
                            
                            <div style={{ marginTop: '16px' }}>
                                <Text strong>Hiệu suất bán hàng theo nhân viên:</Text>
                                <ul>
                                    {metrics.map(store => {
                                        const salesPerStaff = parseFloat(store.total_sales || 0) / (parseInt(store.staff_count || 1));
                                        let color = 'green';
                                        if (salesPerStaff < 500000000) color = 'red';
                                        else if (salesPerStaff < 1000000000) color = 'orange';
                                        
                                        return (
                                            <li key={store.store_id}>
                                                <Text>
                                                    {store.store_name} - 
                                                    {' '}
                                                    <Tag color={color}>{formatNumber(salesPerStaff)} VNĐ / nhân viên</Tag>
                                                </Text>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
}