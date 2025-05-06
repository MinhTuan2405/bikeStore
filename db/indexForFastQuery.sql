-- Indexes for production.products
CREATE INDEX idx_products_brand_id ON production.products(brand_id);
CREATE INDEX idx_products_category_id ON production.products(category_id);
CREATE INDEX idx_products_model_year ON production.products(model_year);

-- Indexes for production.stocks
CREATE INDEX idx_stocks_product_id ON production.stocks(product_id);
CREATE INDEX idx_stocks_store_id ON production.stocks(store_id);

-- Indexes for sales.order_items
CREATE INDEX idx_order_items_order_id ON sales.order_items(order_id);
CREATE INDEX idx_order_items_product_id ON sales.order_items(product_id);
CREATE INDEX idx_order_items_quantity_price_discount ON sales.order_items(quantity, list_price, discount);

-- Indexes for sales.orders
CREATE INDEX idx_orders_customer_id ON sales.orders(customer_id);
CREATE INDEX idx_orders_staff_id ON sales.orders(staff_id);
CREATE INDEX idx_orders_store_id ON sales.orders(store_id);
CREATE INDEX idx_orders_order_date ON sales.orders(order_date);
CREATE INDEX idx_orders_shipped_date_required_date ON sales.orders(shipped_date, required_date);

-- Indexes for sales.customers
CREATE INDEX idx_customers_city ON sales.customers(city);

-- Indexes for sales.staffs
CREATE INDEX idx_staffs_store_id ON sales.staffs(store_id);
CREATE INDEX idx_staffs_manager_id ON sales.staffs(manager_id);