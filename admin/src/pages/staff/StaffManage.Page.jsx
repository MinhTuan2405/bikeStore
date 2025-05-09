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
    Tag,
    Typography,
    Skeleton,
    Spin
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';
import api from '../../services/api';

const { Title } = Typography;
const { Option } = Select;

export default function StaffManagePage() {
    const [staff, setStaff] = useState([]);
    const [stores, setStores] = useState([]);
    const [managers, setManagers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentStaff, setCurrentStaff] = useState(null);
    const [form] = Form.useForm();

    // Tải danh sách nhân viên
    const fetchStaff = async () => {
        try {
            setLoading(true);
            const response = await api.get('/staff');
            setStaff(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching staff:', error);
            message.error('Không thể tải danh sách nhân viên');
            setLoading(false);
        }
    };

    // Tải danh sách showroom
    const fetchStores = async () => {
        try {
            const response = await api.get('/showroom');
            setStores(response.data);
        } catch (error) {
            console.error('Error fetching stores:', error);
            message.error('Không thể tải danh sách showroom');
        }
    };

    // Tạo danh sách người quản lý tiềm năng (tất cả nhân viên có thể là quản lý)
    const updateManagersList = (staffList) => {
        setManagers(staffList);
    };

    useEffect(() => {
        fetchStaff();
        fetchStores();
    }, []);

    useEffect(() => {
        if (staff.length > 0) {
            updateManagersList(staff);
        }
    }, [staff]);

    // Hiển thị modal để thêm nhân viên mới
    const showAddModal = () => {
        setIsEditMode(false);
        setCurrentStaff(null);
        form.resetFields();
        setIsModalVisible(true);
    };

    // Hiển thị modal để chỉnh sửa thông tin nhân viên
    const showEditModal = (record) => {
        setIsEditMode(true);
        setCurrentStaff(record);
        form.setFieldsValue({
            first_name: record.first_name,
            last_name: record.last_name,
            email: record.email,
            phone: record.phone,
            active: record.active.toString(),
            store_id: record.store_id,
            manager_id: record.manager_id,
        });
        setIsModalVisible(true);
    };

    // Đóng modal
    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    // Xử lý thêm hoặc chỉnh sửa nhân viên
    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            
            // Chuyển đổi active từ string sang boolean
            values.active = values.active === 'true';
            
            if (isEditMode && currentStaff) {
                // Cập nhật nhân viên hiện tại
                await api.put(`/staff/${currentStaff.staff_id}`, values);
                message.success('Cập nhật thông tin nhân viên thành công');
            } else {
                // Thêm nhân viên mới
                await api.post('/staff', values);
                message.success('Thêm nhân viên mới thành công');
            }
            
            setIsModalVisible(false);
            form.resetFields();
            fetchStaff(); // Tải lại danh sách nhân viên
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response) {
                // Xử lý các lỗi response từ server
                if (error.response.status === 409) {
                    message.error('Email đã được sử dụng, vui lòng dùng email khác');
                } else if (error.response.data && error.response.data.error) {
                    message.error(error.response.data.error);
                } else {
                    message.error(`Lỗi ${error.response.status}: ${error.response.statusText}`);
                }
            } else if (error.request) {
                // Yêu cầu đã được gửi nhưng không nhận được phản hồi
                message.error('Không nhận được phản hồi từ máy chủ');
            } else {
                // Có lỗi khi thiết lập yêu cầu
                message.error('Có lỗi xảy ra, vui lòng thử lại');
            }
        }
    };

    // Xử lý xóa nhân viên
    const handleDelete = async (staffId) => {
        try {
            await api.delete(`/staff/${staffId}`);
            message.success('Xóa nhân viên thành công');
            fetchStaff(); // Tải lại danh sách nhân viên
        } catch (error) {
            console.error('Error deleting staff:', error);
            if (error.response && error.response.data && error.response.data.error) {
                message.error(error.response.data.error);
            } else {
                message.error('Không thể xóa nhân viên');
            }
        }
    };

    // Định nghĩa các cột trong bảng
    const columns = [
        {
            title: 'ID',
            dataIndex: 'staff_id',
            key: 'staff_id',
            width: 60,
        },
        {
            title: 'Họ và tên',
            key: 'fullname',
            render: (_, record) => `${record.first_name} ${record.last_name}`,
            sorter: (a, b) => `${a.first_name} ${a.last_name}`.localeCompare(`${b.first_name} ${b.last_name}`),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Showroom',
            key: 'store',
            render: (_, record) => record.store_name,
            filters: stores.map(store => ({ text: store.store_name, value: store.store_id })),
            onFilter: (value, record) => record.store_id === value,
        },
        {
            title: 'Quản lý',
            key: 'manager',
            render: (_, record) => record.manager_first_name ? `${record.manager_first_name} ${record.manager_last_name}` : 'Không có',
        },
        {
            title: 'Trạng thái',
            key: 'active',
            render: (_, record) => (
                <Tag color={record.active ? 'green' : 'red'}>
                    {record.active ? 'Đang làm việc' : 'Đã nghỉ việc'}
                </Tag>
            ),
            filters: [
                { text: 'Đang làm việc', value: true },
                { text: 'Đã nghỉ việc', value: false },
            ],
            onFilter: (value, record) => record.active === value,
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
                        title="Bạn có chắc chắn muốn xóa nhân viên này?"
                        onConfirm={() => handleDelete(record.staff_id)}
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
                        <Title level={2}>Quản lý nhân viên</Title>
                        <Button 
                            type="primary" 
                            icon={<PlusOutlined />} 
                            onClick={showAddModal}
                        >
                            Thêm nhân viên
                        </Button>
                    </div>

                    {loading ? (
                        <Skeleton active paragraph={{ rows: 10 }} />
                    ) : (
                        <Table 
                            columns={columns} 
                            dataSource={staff} 
                            rowKey="staff_id"
                            pagination={{ pageSize: 10 }}
                        />
                    )}

                    <Modal
                        title={isEditMode ? "Chỉnh sửa thông tin nhân viên" : "Thêm nhân viên mới"}
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
                            name="staffForm"
                        >
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Form.Item
                                    name="first_name"
                                    label="Tên"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên nhân viên!' }]}
                                    style={{ flex: 1 }}
                                >
                                    <Input prefix={<UserOutlined />} placeholder="Tên nhân viên" />
                                </Form.Item>

                                <Form.Item
                                    name="last_name"
                                    label="Họ"
                                    rules={[{ required: true, message: 'Vui lòng nhập họ nhân viên!' }]}
                                    style={{ flex: 1 }}
                                >
                                    <Input prefix={<UserOutlined />} placeholder="Họ nhân viên" />
                                </Form.Item>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        { required: true, message: 'Vui lòng nhập email!' },
                                        { type: 'email', message: 'Email không hợp lệ!' }
                                    ]}
                                    style={{ flex: 1 }}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="Số điện thoại"
                                    style={{ flex: 1 }}
                                >
                                    <Input placeholder="Số điện thoại" />
                                </Form.Item>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Form.Item
                                    name="store_id"
                                    label="Showroom"
                                    rules={[{ required: true, message: 'Vui lòng chọn showroom!' }]}
                                    style={{ flex: 1 }}
                                >
                                    <Select placeholder="Chọn showroom" prefix={<ShopOutlined />}>
                                        {stores.map(store => (
                                            <Option key={store.store_id} value={store.store_id}>
                                                {store.store_name}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="manager_id"
                                    label="Quản lý"
                                    style={{ flex: 1 }}
                                >
                                    <Select placeholder="Chọn quản lý" allowClear>
                                        {managers.map(manager => (
                                            <Option 
                                                key={manager.staff_id} 
                                                value={manager.staff_id}
                                                disabled={isEditMode && manager.staff_id === currentStaff?.staff_id}
                                            >
                                                {manager.first_name} {manager.last_name}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </div>

                            <Form.Item
                                name="active"
                                label="Trạng thái"
                                initialValue="true"
                            >
                                <Select>
                                    <Option value="true">Đang làm việc</Option>
                                    <Option value="false">Đã nghỉ việc</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Card>
            </div>
        </>
    );
}