# Các Chức Năng Mới Đã Thêm Vào Hệ Thống

## 1. Quản Lý Showroom

### API Endpoints:
- `GET /api/showroom`: Lấy danh sách tất cả các showroom
- `GET /api/showroom/:id`: Lấy thông tin chi tiết của một showroom theo ID
- `GET /api/showroom/metrics/summary`: Lấy thống kê và số liệu của các showroom
- `POST /api/showroom`: Tạo showroom mới (yêu cầu xác thực)
- `PUT /api/showroom/:id`: Cập nhật thông tin showroom (yêu cầu xác thực)
- `DELETE /api/showroom/:id`: Xóa showroom (yêu cầu xác thực)
- `GET /api/showroom/:id/products`: Lấy danh sách sản phẩm trong một showroom

### Chức năng:
- Hiển thị danh sách tất cả showroom
- Xem chi tiết thông tin một showroom
- Xem thống kê doanh thu, hàng tồn kho, và nhân viên theo từng showroom
- Thêm, sửa, xóa thông tin showroom
- Xem danh sách sản phẩm có trong showroom

## 2. Quản Lý Nhân Viên

### API Endpoints:
- `GET /api/staff`: Lấy danh sách tất cả nhân viên
- `GET /api/staff/:id`: Lấy thông tin chi tiết của một nhân viên theo ID
- `GET /api/staff/metrics/summary`: Lấy thống kê và số liệu của nhân viên
- `POST /api/staff`: Tạo nhân viên mới (yêu cầu xác thực)
- `PUT /api/staff/:id`: Cập nhật thông tin nhân viên (yêu cầu xác thực)
- `DELETE /api/staff/:id`: Xóa nhân viên (yêu cầu xác thực)
- `GET /api/staff/by-store/:storeId`: Lấy danh sách nhân viên theo showroom

### Chức năng:
- Hiển thị danh sách tất cả nhân viên
- Xem chi tiết thông tin một nhân viên
- Xem hiệu suất bán hàng của nhân viên
- Thống kê nhân viên theo trạng thái hoạt động và showroom
- Thêm, sửa, xóa thông tin nhân viên
- Xem danh sách nhân viên theo từng showroom

## 3. Thống Kê Bán Hàng Nâng Cao

### API Endpoints:
- `GET /api/sale/metrics`: Xem thống kê chi tiết về doanh số bán hàng
- `GET /api/sale/dashboard`: Xem tổng quan doanh số trên dashboard

### Chức năng:
- Xem doanh số bán hàng theo showroom
- Xem doanh số bán hàng theo danh mục sản phẩm
- Xem doanh số bán hàng theo thương hiệu
- Xem xu hướng bán hàng theo tháng (12 tháng gần nhất)
- Xem danh sách sản phẩm bán chạy nhất
- Xem phân bố trạng thái đơn hàng
- Xem tổng quan doanh số cho dashboard

## 4. Xác Thực Và Phân Quyền

### Các middleware xác thực:
- `verifyToken`: Xác thực token JWT cho các API yêu cầu đăng nhập
- `optionalAuth`: Xác thực không bắt buộc, sử dụng cho các API công khai nhưng có thể cá nhân hóa
- `isAdmin`: Kiểm tra quyền admin

### Chức năng:
- Bảo vệ các API quản lý (thêm, sửa, xóa) bằng xác thực JWT
- Cho phép truy cập công khai đối với các API chỉ đọc
- Phân quyền admin cho các chức năng đặc biệt

## 5. Kết Nối Cơ Sở Dữ Liệu PostgreSQL

- Kết nối đến cơ sở dữ liệu PostgreSQL sử dụng thư viện pg
- Hỗ trợ cấu hình thông qua biến môi trường
- Xử lý lỗi kết nối cơ sở dữ liệu

## Lưu ý khi triển khai

- Đảm bảo PostgreSQL đã được cài đặt và cấu hình đúng
- Kiểm tra tên cơ sở dữ liệu là "bikestore"
- Cung cấp thông tin đăng nhập PostgreSQL chính xác
- Sử dụng file .env để cấu hình thông tin cơ sở dữ liệu trong môi trường production 