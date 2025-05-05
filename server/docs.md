API Structure for BikeStore (RESTful Design)

---

### 1. **Products**

#### GET /api/products
```json
// Response
[
  {
    "product_id": 1,
    "product_name": "Trek FX 3 Disc",
    "brand_id": 2,
    "category_id": 1,
    "model_year": 2024,
    "list_price": 799.99
  }
]
```

#### GET /api/products/{id}
```json
// Response
{
  "product_id": 1,
  "product_name": "Trek FX 3 Disc",
  "brand_id": 2,
  "category_id": 1,
  "model_year": 2024,
  "list_price": 799.99
}
```

#### POST /api/products
```json
// Request
{
  "product_name": "Trek FX 3 Disc",
  "brand_id": 2,
  "category_id": 1,
  "model_year": 2024,
  "list_price": 799.99
}
```

#### PUT /api/products/{id}
```json
// Request
{
  "product_name": "Trek FX 4 Disc",
  "list_price": 899.99
}
```

#### DELETE /api/products/{id}
No body required.

---

### 2. **Orders**

#### POST /api/orders
```json
// Request
{
  "customer_id": 12,
  "order_status": 1,
  "order_date": "2025-05-03",
  "required_date": "2025-05-10",
  "store_id": 1,
  "staff_id": 5,
  "items": [
    {
      "product_id": 3,
      "quantity": 2,
      "list_price": 500.00,
      "discount": 0.10
    }
  ]
}
```

#### GET /api/orders/{id}
```json
// Response
{
  "order_id": 101,
  "customer_id": 12,
  "order_status": 1,
  "order_date": "2025-05-03",
  "required_date": "2025-05-10",
  "shipped_date": null,
  "store_id": 1,
  "staff_id": 5,
  "items": [
    {
      "item_id": 1,
      "product_id": 3,
      "quantity": 2,
      "list_price": 500.00,
      "discount": 0.10
    }
  ]
}
```

#### PUT /api/orders/{id}/status
```json
// Request
{
  "order_status": 2,
  "shipped_date": "2025-05-05"
}
```

---

### 3. **Customers**

#### POST /api/customers
```json
// Request
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "street": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zip_code": "10001"
}
```

#### GET /api/customers/{id}
```json
// Response
{
  "customer_id": 12,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "city": "New York",
  "state": "NY"
}
```

---

### 4. **Stocks**

#### GET /api/stocks/{store_id}
```json
// Response
[
  {
    "product_id": 1,
    "quantity": 20
  },
  {
    "product_id": 2,
    "quantity": 5
  }
]
```

#### PUT /api/stocks
```json
// Request
{
  "store_id": 1,
  "product_id": 2,
  "quantity": 15
}
```

---

### 5. **Authentication**

#### POST /api/auth/login
```json
// Request
{
  "email": "john@example.com",
  "password": "password123"
}

// Response
{
  "token": "eyJhbGciOi..."
}
```

#### GET /api/auth/me
```json
// Response
{
  "user_id": 12,
  "role": "customer",
  "email": "john@example.com"
}
```

---

