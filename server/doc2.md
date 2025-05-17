Dưới đây là phần **thiết kế sơ đồ luồng chức năng** (flow diagram) và danh sách các **API nên có** để xây dựng trang bán hàng xe đạp dựa trên schema BikeStore:

---

## 🧭 **I. Sơ đồ luồng chức năng (Functional Flow)**

### 🌐 1. Người dùng (Khách hàng)

```
[Trang chủ] → [Xem sản phẩm] → [Thêm vào giỏ hàng]
                          ↓
                    [Xem giỏ hàng] → [Cập nhật số lượng / Xóa]
                          ↓
                  [Tiến hành thanh toán]
                          ↓
                 [Điền thông tin, xác nhận]
                          ↓
                     [Tạo đơn hàng]
                          ↓
               [Xem lịch sử đơn hàng / trạng thái]
```

---

### 🧑‍💼 2. Nhân viên / Admin

```
[Đăng nhập] → [Dashboard]
                    ↓
        ┌────────────────────────┬──────────────────────┐
        ↓                        ↓                      ↓
[Quản lý sản phẩm]       [Quản lý kho hàng]     [Xử lý đơn hàng]
    ↓                         ↓                      ↓
Tạo / Sửa / Xóa        Xem & cập nhật tồn kho     Cập nhật trạng thái
```

---

## 🔌 **II. Danh sách các API nên có (RESTful API)**

### 🛒 **1. Sản phẩm (Products)**

| Method | Endpoint             | Chức năng                 |
| ------ | -------------------- | ------------------------- |
| GET    | `/api/products`      | Lấy danh sách sản phẩm    |
| GET    | `/api/products/{id}` | Chi tiết sản phẩm         |
| POST   | `/api/products`      | Thêm sản phẩm mới (admin) |
| PUT    | `/api/products/{id}` | Cập nhật sản phẩm (admin) |
| DELETE | `/api/products/{id}` | Xoá sản phẩm (admin)      |

---

### 🏷️ **2. Danh mục & Hãng (Categories, Brands)**

\| GET    | `/api/categories`         | Lấy danh sách danh mục          |
\| GET    | `/api/brands`             | Lấy danh sách hãng              |

---

### 📥 **3. Tồn kho (Stock)**

\| GET    | `/api/stocks`             | Lấy tồn kho toàn hệ thống       |
\| GET    | `/api/stocks/{store_id}` | Lấy tồn kho theo cửa hàng       |
\| PUT    | `/api/stocks`            | Cập nhật tồn kho (admin)        |

---

### 🧑 **4. Khách hàng (Customers)**

\| POST   | `/api/customers`          | Đăng ký khách hàng              |
\| GET    | `/api/customers/{id}`     | Lấy thông tin khách hàng        |
\| PUT    | `/api/customers/{id}`     | Cập nhật thông tin              |

---

### 🧾 **5. Đơn hàng (Orders & Order Items)**

\| POST   | `/api/orders`             | Tạo đơn hàng mới                |
\| GET    | `/api/orders/{id}`        | Chi tiết đơn hàng               |
\| GET    | `/api/customers/{id}/orders` | Lấy đơn hàng theo khách       |
\| PUT    | `/api/orders/{id}/status` | Cập nhật trạng thái đơn hàng    |

---

### 🛍️ **6. Giỏ hàng (Cart)** *(Client-side hoặc session-based)*

\| POST   | `/api/cart/add`           | Thêm sản phẩm vào giỏ           |
\| PUT    | `/api/cart/update`        | Cập nhật số lượng               |
\| DELETE | `/api/cart/remove`        | Xoá sản phẩm khỏi giỏ           |
\| GET    | `/api/cart`               | Lấy thông tin giỏ hàng hiện tại |

---

### 🧑‍💼 **7. Nhân viên (Staffs)**

\| GET    | `/api/staffs`             | Danh sách nhân viên             |
\| POST   | `/api/staffs`             | Thêm nhân viên mới              |
\| PUT    | `/api/staffs/{id}`        | Cập nhật thông tin              |
\| DELETE | `/api/staffs/{id}`        | Xóa nhân viên                   |

---

### 📊 **8. Thống kê (Analytics)**

\| GET    | `/api/stats/revenue?range=monthly` | Doanh thu theo tháng      |
\| GET    | `/api/stats/bestsellers`           | Sản phẩm bán chạy         |
\| GET    | `/api/stats/inventory/low`         | Sản phẩm tồn kho thấp     |
\| GET    | `/api/stats/orders/status`         | Số lượng đơn theo trạng thái |

---

### 🔐 **9. Xác thực & Phân quyền (Auth)**

\| POST   | `/api/auth/login`         | Đăng nhập                    |
\| POST   | `/api/auth/register`      | Đăng ký tài khoản            |
\| GET    | `/api/auth/me`            | Lấy thông tin tài khoản hiện tại |
\| POST   | `/api/auth/logout`        | Đăng xuất                    |

---

Bạn có muốn mình vẽ sơ đồ API (REST structure) hoặc cung cấp các mẫu JSON request/response cho từng endpoint?
