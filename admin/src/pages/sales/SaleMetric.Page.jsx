import { useEffect, useState } from 'react';
import { 
    Card, 
    Row, 
    Col, 
    Table, 
    Spin, 
    Statistic, 
    Typography, 
    message,
    Divider,
    Progress,
    Tag
} from 'antd';
import { 
    DollarOutlined, 
    ShoppingOutlined, 
    InboxOutlined,
    BarChartOutlined,
    TagOutlined
} from '@ant-design/icons';
import { Line, Pie, Column } from '@ant-design/plots';
import api from '../../services/api';

const { Title, Text } = Typography;

export default function SaleMetricPage() {
    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState(null);

    useEffect(() => {
        fetchMetrics();
    }, []);

    const fetchMetrics = async () => {
        try {
            setLoading(true);
            const response = await api.get('/sale/metrics');
            setMetrics(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching metrics:', error);
            message.error('Không thể tải dữ liệu thống kê doanh số');
            setLoading(false);
        }
    };

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

    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh' 
            }}>
                <Spin size="large" />
                <div style={{ marginTop: '60px', position: 'absolute' }}>Đang tải dữ liệu...</div>
            </div>
        );
    }

    if (!metrics) {
        return <div>Error loading metrics</div>;
    }

    // eslint-disable-next-line no-unused-vars
    const { summary, monthly_trend, sales_by_category, sales_by_brand, top_products, order_status_distribution } = metrics;

    // Top products columns
    const columns = [
        {
            title: 'Tên Sản Phẩm',
            dataIndex: 'product_name',
            key: 'product_name',
        },
        {
            title: 'Thương Hiệu',
            dataIndex: 'brand_name',
            key: 'brand_name',
        },
        {
            title: 'Danh Mục',
            dataIndex: 'category_name',
            key: 'category_name',
        },
        {
            title: 'Số Lượng Bán',
            dataIndex: 'units_sold',
            key: 'units_sold',
            sorter: (a, b) => a.units_sold - b.units_sold,
        },
        {
            title: 'Doanh Thu',
            dataIndex: 'revenue',
            key: 'revenue',
            render: (value) => `${parseFloat(value).toLocaleString()} VNĐ`,
            sorter: (a, b) => a.revenue - b.revenue,
        },
    ];

    // Cấu hình biểu đồ doanh thu theo danh mục
    const getCategoryChartConfig = () => {
        return {
            data: sales_by_category,
            xField: 'category_name',
            yField: 'revenue',
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

    // Cấu hình biểu đồ phân bố trạng thái đơn hàng
    const getOrderStatusConfig = () => {
        return {
            data: order_status_distribution,
            angleField: 'count',
            colorField: 'status',
            radius: 0.8,
            autoFit: true,
            height: 300,
            padding: 'auto',
            legend: {
                position: 'bottom'
            }
        };
    };

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Chỉ số kinh doanh</Title>
            
            {/* Thông tin tổng quan */}
            <Row gutter={16} style={{ marginBottom: '20px' }}>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Tổng doanh thu"
                            value={summary.total_revenue}
                            prefix={<DollarOutlined />}
                            valueStyle={{ color: '#722ed1' }}
                            formatter={value => formatNumber(value) + ' VNĐ'}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Tổng đơn hàng"
                            value={summary.total_orders}
                            prefix={<ShoppingOutlined />}
                            valueStyle={{ color: '#faad14' }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Số lượng bán ra"
                            value={summary.total_units_sold}
                            prefix={<InboxOutlined />}
                            valueStyle={{ color: '#52c41a' }}
                        />
                    </Card>
                </Col>
            </Row>

            {/* Biểu đồ doanh thu theo tháng */}
            <Divider />

            {/* Biểu đồ doanh thu theo danh mục và phân bố trạng thái */}
            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    <Card 
                        title={
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <TagOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                                <span>Doanh thu theo danh mục</span>
                            </div>
                        }
                        styles={{ body: { padding: '12px' } }}
                    >
                        <div style={{ width: '100%', height: '300px' }}>
                            <Column {...getCategoryChartConfig()} />
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card 
                        title={
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ShoppingOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                                <span>Phân bố trạng thái đơn hàng</span>
                            </div>
                        }
                        styles={{ body: { padding: '12px' } }}
                    >
                        <div style={{ width: '100%', height: '300px' }}>
                            <Pie {...getOrderStatusConfig()} />
                        </div>
                    </Card>
                </Col>
            </Row>

            <Divider />

            {/* Bảng sản phẩm bán chạy */}
            <Card 
                title={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <InboxOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                        <span>Sản phẩm bán chạy nhất</span>
                    </div>
                }
            >
                <Table
                    columns={columns}
                    dataSource={top_products}
                    rowKey="product_id"
                    pagination={{ pageSize: 5 }}
                />
            </Card>

            <Divider />

            {/* Phân tích */}
            <Card title="Phân tích doanh số">
                <Row gutter={16}>
                    <Col span={24}>
                        <Text>
                            Dựa trên dữ liệu hiện tại, danh mục sản phẩm có doanh thu cao nhất là 
                            {' '}
                            <Text strong>
                                {sales_by_category.length > 0 ? 
                                    sales_by_category.sort((a, b) => b.revenue - a.revenue)[0].category_name : 'N/A'}
                            </Text>
                            {' '}
                            với tổng doanh thu 
                            {' '}
                            <Text strong>
                                {sales_by_category.length > 0 ? 
                                    formatNumber(sales_by_category.sort((a, b) => b.revenue - a.revenue)[0].revenue) + ' VNĐ' : '0 VNĐ'}
                            </Text>
                            .
                        </Text>
                        
                        <div style={{ marginTop: '16px' }}>
                            <Text strong>Hiệu suất bán hàng theo danh mục:</Text>
                            <ul>
                                {sales_by_category.map(category => {
                                    let color = 'green';
                                    if (category.revenue < 500000000) color = 'red';
                                    else if (category.revenue < 1000000000) color = 'orange';
                                    
                                    return (
                                        <li key={category.category_id}>
                                            <Text>
                                                {category.category_name} - 
                                                {' '}
                                                <Tag color={color}>{formatNumber(category.revenue)} VNĐ</Tag>
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
    );
}