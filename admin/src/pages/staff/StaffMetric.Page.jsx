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
    Progress, 
    Divider,
    Tag
} from 'antd';
import { 
    UserOutlined, 
    TeamOutlined, 
    ShopOutlined, 
    DollarOutlined, 
    ShoppingOutlined 
} from '@ant-design/icons';
import { Bar, Pie } from '@ant-design/plots';
import api from '../../services/api';

const { Title, Text } = Typography;

export default function StaffMetricPage() {
    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState(null);

    // Tải dữ liệu thống kê
    const fetchMetrics = async () => {
        try {
            setLoading(true);
            const response = await api.get('/staff/metrics/summary');
            setMetrics(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching staff metrics:', error);
            message.error('Không thể tải dữ liệu thống kê nhân viên');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMetrics();
    }, []);

    // Cấu hình biểu đồ phân bố nhân viên theo trạng thái
    const getActivityChartConfig = () => {
        if (!metrics || !metrics.activityStats) return {};

        const data = [
            { type: 'Đang làm việc', value: metrics.activityStats.active },
            { type: 'Đã nghỉ việc', value: metrics.activityStats.inactive }
        ];

        return {
            data,
            angleField: 'value',
            colorField: 'type',
            radius: 0.8,
            legend: {
                position: 'bottom'
            },
            label: {
                type: 'outer',
                content: '{name}: {percentage}'
            },
            interactions: [{ type: 'element-active' }],
            color: ['#52c41a', '#ff4d4f'],
            statistic: {
                title: {
                    content: 'Tổng số'
                },
                content: {
                    content: metrics.total_staff
                }
            }
        };
    };

    // Cấu hình biểu đồ phân bố nhân viên theo showroom
    const getStoreDistributionConfig = () => {
        if (!metrics || !metrics.storeStaffDistribution) return {};

        return {
            data: metrics.storeStaffDistribution,
            xField: 'store',
            yField: 'staff_count',
            autoFit: true,
            padding: [30, 30, 50, 50],
            columnWidthRatio: 0.5,
            label: {
                position: 'top',
                style: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    fill: '#000000'
                }
            },
            xAxis: {
                label: {
                    autoHide: true,
                    autoRotate: false
                }
            },
            yAxis: {
                min: 0,
                max: 5,
                tickInterval: 1
            }
        };
    };

    // Định nghĩa các cột trong bảng hiệu suất nhân viên
    const performanceColumns = [
        {
            title: 'ID',
            dataIndex: 'staff_id',
            key: 'staff_id',
            width: 60,
        },
        {
            title: 'Nhân viên',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Showroom',
            dataIndex: 'store',
            key: 'store',
        },
        {
            title: 'Số đơn hàng',
            dataIndex: 'total_orders',
            key: 'total_orders',
            sorter: (a, b) => a.total_orders - b.total_orders,
        },
        {
            title: 'Doanh số',
            key: 'total_sales',
            dataIndex: 'total_sales',
            render: (value) => `${value.toLocaleString()} VNĐ`,
            sorter: (a, b) => a.total_sales - b.total_sales,
        },
        {
            title: 'Hiệu suất',
            key: 'performance',
            render: (_, record) => {
                // Giả sử mức cao nhất là 100 triệu
                const maxExpectedSales = 100000000;
                const percent = Math.min(Math.round((record.total_sales / maxExpectedSales) * 100), 100);
                
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
                <Title level={2}>Thống kê & Hiệu suất Nhân viên</Title>
                
                {/* Thông tin tổng quan */}
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Tổng số nhân viên"
                                value={metrics?.total_staff || 0}
                                prefix={<TeamOutlined />}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Đang làm việc"
                                value={metrics?.activityStats?.active || 0}
                                prefix={<UserOutlined />}
                                valueStyle={{ color: '#52c41a' }}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Đã nghỉ việc"
                                value={metrics?.activityStats?.inactive || 0}
                                prefix={<UserOutlined />}
                                valueStyle={{ color: '#ff4d4f' }}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Tổng doanh số"
                                value={metrics?.staffPerformance?.reduce((total, staff) => total + staff.total_sales, 0) || 0}
                                prefix={<DollarOutlined />}
                                valueStyle={{ color: '#722ed1' }}
                                formatter={value => `${value.toLocaleString()} VNĐ`}
                            />
                        </Card>
                    </Col>
                </Row>
                
                {/* Biểu đồ và bảng */}
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="Trạng thái nhân viên" style={{ height: '400px' }}>
                            <Pie {...getActivityChartConfig()} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card 
                            title="Phân bố nhân viên theo Showroom" 
                            style={{ height: '400px', overflow: 'hidden' }}
                            bodyStyle={{ height: 'calc(100% - 58px)' }}
                        >
                            <div style={{ height: '100%', width: '100%' }}>
                                <Bar {...getStoreDistributionConfig()} />
                            </div>
                        </Card>
                    </Col>
                </Row>
                
                <Divider />
                
                {/* Bảng hiệu suất nhân viên */}
                <Card 
                    title={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ShoppingOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
                            <span>Hiệu suất bán hàng của nhân viên</span>
                        </div>
                    }
                >
                    <Table 
                        columns={performanceColumns} 
                        dataSource={metrics?.staffPerformance || []} 
                        rowKey="staff_id"
                        pagination={{ pageSize: 10 }}
                    />
                </Card>
                
                <Divider />
                
                {/* Thông tin bổ sung */}
                <Card title="Phân tích hiệu suất">
                    <Row gutter={16}>
                        <Col span={24}>
                            <Text>
                                Dựa trên dữ liệu hiện tại, hiệu suất bán hàng trung bình của nhân viên là
                                {' '}
                                <Text strong>
                                    {(metrics?.staffPerformance?.reduce((total, staff) => total + staff.total_sales, 0) / (metrics?.staffPerformance?.length || 1)).toLocaleString()} VNĐ
                                </Text>
                                {' '}
                                mỗi nhân viên. Showroom có số lượng nhân viên nhiều nhất là 
                                {' '}
                                <Text strong>
                                    {metrics?.storeStaffDistribution?.[0]?.store || 'N/A'}
                                </Text>
                                {' '}
                                với 
                                {' '}
                                <Text strong>
                                    {metrics?.storeStaffDistribution?.[0]?.staff_count || 0}
                                </Text>
                                {' '}
                                nhân viên.
                            </Text>
                            
                            <div style={{ marginTop: '16px' }}>
                                <Text strong>Top 3 nhân viên có hiệu suất cao nhất:</Text>
                                <ul>
                                    {metrics?.staffPerformance?.slice(0, 3).map((staff, index) => (
                                        <li key={staff.staff_id}>
                                            <Text>
                                                {staff.name} - {staff.store} - 
                                                {' '}
                                                <Tag color="green">{staff.total_sales.toLocaleString()} VNĐ</Tag>
                                            </Text>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
} 