import { useState, useEffect } from 'react';
import { 
    Button, 
    Table, 
    Space, 
    Modal, 
    Form, 
    Input, 
    Select, 
    Popconfirm, 
    message, 
    Card,
    Typography,
    Skeleton,
    Divider
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ShopOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import api from '../../services/api';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

// Danh sách mã tiểu bang
const states = [
    { value: 'NY', label: 'New York' },
    { value: 'CA', label: 'California' },
    { value: 'TX', label: 'Texas' },
    { value: 'FL', label: 'Florida' },
    { value: 'IL', label: 'Illinois' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'OH', label: 'Ohio' },
    { value: 'GA', label: 'Georgia' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'MI', label: 'Michigan' }
];

export default function ShowroomManagePage() {
    const [showrooms, setShowrooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentShowroom, setCurrentShowroom] = useState(null);
    const [form] = Form.useForm();

    // Tải danh sách showroom
    const fetchShowrooms = async () => {
        try {
            setLoading(true);
            const response = await api.get('/showroom');
            setShowrooms(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching showrooms:', error);
            message.error('Không thể tải danh sách showroom');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchShowrooms();
    }, []);

    // Hiển thị modal để thêm showroom mới
    const showAddModal = () => {
        setIsEditMode(false);
        setCurrentShowroom(null);
        form.resetFields();
        setIsModalVisible(true);
    };

    // Hiển thị modal để chỉnh sửa thông tin showroom
    const showEditModal = (record) => {
        setIsEditMode(true);
        setCurrentShowroom(record);
        form.setFieldsValue({
            store_name: record.store_name,
            phone: record.phone,
            email: record.email,
            street: record.street,
            city: record.city,
            state: record.state,
            zip_code: record.zip_code
        });
        setIsModalVisible(true);
    };

    // Đóng modal
    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    // Xử lý thêm hoặc chỉnh sửa showroom
    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            
            if (isEditMode && currentShowroom) {
                // Cập nhật showroom hiện tại
                await api.put(`/showroom/${currentShowroom.store_id}`, values);
                message.success('Cập nhật thông tin showroom thành công');
            } else {
                // Thêm showroom mới
                await api.post('/showroom', values);
                message.success('Thêm showroom mới thành công');
            }
            
            setIsModalVisible(false);
            form.resetFields();
            fetchShowrooms(); // Tải lại danh sách showroom
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response && error.response.data && error.response.data.error) {
                message.error(error.response.data.error);
            } else {
                message.error('Có lỗi xảy ra, vui lòng thử lại');
            }
        }
    };

    // Xử lý xóa showroom
    const handleDelete = async (showroomId) => {
        try {
            const response = await api.delete(`/showroom/${showroomId}`);
            message.success('Xóa showroom thành công');
            fetchShowrooms(); // Tải lại danh sách showroom
        } catch (error) {
            console.error('Error deleting showroom:', error);
            if (error.response && error.response.data && error.response.data.error) {
                message.error(error.response.data.error);
                // Hiển thị thông tin chi tiết về các phụ thuộc nếu có
                if (error.response.data.dependencies) {
                    const deps = error.response.data.dependencies;
                    let errorMsg = 'Không thể xóa showroom vì còn liên kết với:';
                    if (deps.orders > 0) errorMsg += ` ${deps.orders} đơn hàng,`;
                    if (deps.staff > 0) errorMsg += ` ${deps.staff} nhân viên,`;
                    if (deps.stock > 0) errorMsg += ` ${deps.stock} mặt hàng tồn kho`;
                    message.error(errorMsg);
                }
            } else {
                message.error('Không thể xóa showroom');
            }
        }
    };

    // Xem danh sách sản phẩm trong showroom
    const viewProducts = (showroomId) => {
        message.info(`Chức năng xem sản phẩm trong showroom ${showroomId} sẽ được triển khai sau.`);
    };

    // Định nghĩa các cột trong bảng
    const columns = [
        {
            title: 'ID',
            dataIndex: 'store_id',
            key: 'store_id',
            width: 60,
        },
        {
            title: 'Tên Showroom',
            dataIndex: 'store_name',
            key: 'store_name',
            sorter: (a, b) => a.store_name.localeCompare(b.store_name),
        },
        {
            title: 'Địa chỉ',
            key: 'address',
            render: (_, record) => (
                <span>
                    {record.street && `${record.street}, `}
                    {record.city && `${record.city}, `}
                    {record.state}
                    {record.zip_code && ` ${record.zip_code}`}
                </span>
            ),
        },
        {
            title: 'Liên hệ',
            key: 'contact',
            render: (_, record) => (
                <div>
                    {record.phone && (
                        <div>
                            <PhoneOutlined /> {record.phone}
                        </div>
                    )}
                    {record.email && (
                        <div>
                            <MailOutlined /> {record.email}
                        </div>
                    )}
                </div>
            ),
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button 
                        type="primary" 
                        icon={<EditOutlined />} 
                        onClick={() => showEditModal(record)}
                    >
                        Sửa
                    </Button>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa showroom này?"
                        onConfirm={() => handleDelete(record.store_id)}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type="primary" danger icon={<DeleteOutlined />}>
                            Xóa
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div style={{ padding: '20px' }}>
                <Card>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <Title level={2}>Quản lý Showroom</Title>
                        <Button 
                            type="primary" 
                            icon={<PlusOutlined />} 
                            onClick={showAddModal}
                        >
                            Thêm Showroom
                        </Button>
                    </div>

                    {loading ? (
                        <Skeleton active paragraph={{ rows: 10 }} />
                    ) : (
                        <Table 
                            columns={columns} 
                            dataSource={showrooms} 
                            rowKey="store_id"
                            pagination={{ pageSize: 10 }}
                            expandable={{
                                expandedRowRender: record => (
                                    <div style={{ margin: 0 }}>
                                        <p><strong>Địa chỉ đầy đủ:</strong> {record.street}, {record.city}, {record.state} {record.zip_code}</p>
                                        <p><strong>Liên hệ:</strong> {record.phone} | {record.email}</p>
                                        <Divider style={{ margin: '8px 0' }} />
                                        <Button 
                                            type="link" 
                                            onClick={() => viewProducts(record.store_id)}
                                            icon={<ShopOutlined />}
                                        >
                                            Xem danh sách sản phẩm trong showroom
                                        </Button>
                                    </div>
                                )
                            }}
                        />
                    )}

                    <Modal
                        title={isEditMode ? "Chỉnh sửa thông tin showroom" : "Thêm showroom mới"}
                        open={isModalVisible}
                        onOk={handleSubmit}
                        onCancel={handleCancel}
                        okText={isEditMode ? "Cập nhật" : "Thêm"}
                        cancelText="Hủy"
                        width={700}
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            name="showroomForm"
                        >
                            <Form.Item
                                name="store_name"
                                label="Tên Showroom"
                                rules={[{ required: true, message: 'Vui lòng nhập tên showroom!' }]}
                            >
                                <Input prefix={<ShopOutlined />} placeholder="Tên showroom" />
                            </Form.Item>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Form.Item
                                    name="phone"
                                    label="Số điện thoại"
                                    style={{ flex: 1 }}
                                >
                                    <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label="Email"
                                    style={{ flex: 1 }}
                                    rules={[
                                        { type: 'email', message: 'Email không hợp lệ!' }
                                    ]}
                                >
                                    <Input prefix={<MailOutlined />} placeholder="Email" />
                                </Form.Item>
                            </div>

                            <Form.Item
                                name="street"
                                label="Địa chỉ"
                            >
                                <TextArea rows={2} placeholder="Địa chỉ đường phố" />
                            </Form.Item>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Form.Item
                                    name="city"
                                    label="Thành phố"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên thành phố!' }]}
                                    style={{ flex: 1 }}
                                >
                                    <Input placeholder="Thành phố" />
                                </Form.Item>

                                <Form.Item
                                    name="state"
                                    label="Tiểu bang"
                                    rules={[{ required: true, message: 'Vui lòng chọn tiểu bang!' }]}
                                    style={{ flex: 1 }}
                                >
                                    <Select placeholder="Chọn tiểu bang">
                                        {states.map(state => (
                                            <Option key={state.value} value={state.value}>
                                                {state.label} ({state.value})
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="zip_code"
                                    label="Mã bưu chính"
                                    style={{ flex: 1 }}
                                >
                                    <Input placeholder="Mã bưu chính" />
                                </Form.Item>
                            </div>
                        </Form>
                    </Modal>
                </Card>
            </div>
        </>
    );
}