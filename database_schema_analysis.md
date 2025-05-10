# Database Schema Analysis

The database is organized into two main schemas: `production` and `sales`.

**1. `production` Schema:** This schema deals with products, their categories, brands, and stock levels.

*   **`production.categories`**: Stores information about product categories.
    *   `category_id` (Primary Key): Unique identifier for the category.
    *   `category_name`: Name of the category.
*   **`production.brands`**: Stores information about product brands.
    *   `brand_id` (Primary Key): Unique identifier for the brand.
    *   `brand_name`: Name of the brand.
*   **`production.products`**: Stores details about individual products.
    *   `product_id` (Primary Key): Unique identifier for the product.
    *   `product_name`: Name of the product.
    *   `brand_id`: Foreign key referencing `production.brands.brand_id`.
    *   `category_id`: Foreign key referencing `production.categories.category_id`.
    *   `model_year`: The model year of the product.
    *   `list_price`: The retail price of the product.
*   **`production.stocks`**: Manages the stock quantity of products at different stores.
    *   `store_id`: Part of a composite primary key, foreign key referencing `sales.stores.store_id`.
    *   `product_id`: Part of a composite primary key, foreign key referencing `production.products.product_id`.
    *   `quantity`: The quantity of the product in stock at a specific store.

**2. `sales` Schema:** This schema handles customer data, store information, staff details, orders, and order items.

*   **`sales.customers`**: Stores information about customers.
    *   `customer_id` (Primary Key): Unique identifier for the customer.
    *   `first_name`, `last_name`: Customer's name.
    *   `phone`, `email`: Customer's contact information.
    *   `street`, `city`, `state`, `zip_code`: Customer's address.
*   **`sales.stores`**: Stores information about the retail stores.
    *   `store_id` (Primary Key): Unique identifier for the store.
    *   `store_name`: Name of the store.
    *   `phone`, `email`: Store's contact information.
    *   `street`, `city`, `state`, `zip_code`: Store's address.
*   **`sales.staffs`**: Stores information about store staff.
    *   `staff_id` (Primary Key): Unique identifier for the staff member.
    *   `first_name`, `last_name`: Staff member's name.
    *   `email`, `phone`: Staff member's contact information.
    *   `active`: Boolean indicating if the staff member is currently active.
    *   `store_id`: Foreign key referencing `sales.stores.store_id`.
    *   `manager_id`: Foreign key referencing `sales.staffs.staff_id` (self-referencing for manager-subordinate relationship).
*   **`sales.orders`**: Stores information about customer orders.
    *   `order_id` (Primary Key): Unique identifier for the order.
    *   `customer_id`: Foreign key referencing `sales.customers.customer_id`.
    *   `order_status`: Indicates the current status of the order (e.g., Pending, Processing).
    *   `order_date`, `required_date`, `shipped_date`: Dates related to the order.
    *   `store_id`: Foreign key referencing `sales.stores.store_id`.
    *   `staff_id`: Foreign key referencing `sales.staffs.staff_id`.
*   **`sales.order_items`**: Stores details of individual items within an order.
    *   `order_id`: Part of a composite primary key, foreign key referencing `sales.orders.order_id`.
    *   `item_id`: Part of a composite primary key, unique identifier for the item within an order.
    *   `product_id`: Foreign key referencing `production.products.product_id`.
    *   `quantity`: Quantity of the product ordered.
    *   `list_price`: Price of the product at the time of order.
    *   `discount`: Discount applied to the product for this order item.

**Relationships Summary:**

*   A product belongs to one category (`production.products.category_id` > `production.categories.category_id`).
*   A product belongs to one brand (`production.products.brand_id` > `production.brands.brand_id`).
*   An order is placed by one customer (`sales.orders.customer_id` > `sales.customers.customer_id`).
*   An order is associated with one store (`sales.orders.store_id` > `sales.stores.store_id`).
*   An order is handled by one staff member (`sales.orders.staff_id` > `sales.staffs.staff_id`).
*   A staff member belongs to one store (`sales.staffs.store_id` > `sales.stores.store_id`).
*   A staff member can have one manager, who is also a staff member (`sales.staffs.manager_id` - `sales.staffs.staff_id`).
*   An order item belongs to one order (`sales.order_items.order_id` > `sales.orders.order_id`).
*   An order item refers to one product (`sales.order_items.product_id` > `production.products.product_id`).
*   Stock information links a store to a product (`production.stocks.store_id` > `sales.stores.store_id` and `production.stocks.product_id` > `production.products.product_id`).

**Mermaid Diagram:**

```mermaid
erDiagram
    production.categories {
        int category_id PK
        varchar category_name
    }
    production.brands {
        int brand_id PK
        varchar brand_name
    }
    production.products {
        int product_id PK
        varchar product_name
        int brand_id FK
        int category_id FK
        smallint model_year
        decimal list_price
    }
    production.stocks {
        int store_id PK, FK
        int product_id PK, FK
        int quantity
    }
    sales.customers {
        int customer_id PK
        varchar first_name
        varchar last_name
        varchar phone
        varchar email
        varchar street
        varchar city
        varchar state
        varchar zip_code
    }
    sales.stores {
        int store_id PK
        varchar store_name
        varchar phone
        varchar email
        varchar street
        varchar city
        varchar state
        varchar zip_code
    }
    sales.staffs {
        int staff_id PK
        varchar first_name
        varchar last_name
        varchar email
        varchar phone
        boolean active
        int store_id FK
        int manager_id FK
    }
    sales.orders {
        int order_id PK
        int customer_id FK
        smallint order_status
        date order_date
        date required_date
        date shipped_date
        int store_id FK
        int staff_id FK
    }
    sales.order_items {
        int order_id PK, FK
        int item_id PK
        int product_id FK
        int quantity
        decimal list_price
        decimal discount
    }

    production.products ||--o{ production.categories : "belongs to"
    production.products ||--o{ production.brands : "belongs to"
    production.stocks }|--|| production.products : "stocks for"
    production.stocks }|--|| sales.stores : "located at"
    sales.orders ||--o{ sales.customers : "placed by"
    sales.orders ||--o{ sales.stores : "processed at"
    sales.orders ||--o{ sales.staffs : "handled by"
    sales.staffs ||--o{ sales.stores : "works at"
    sales.staffs ||--o| sales.staffs : "manages"
    sales.order_items }|--|| sales.orders : "details for"
    sales.order_items ||--o{ production.products : "is for"