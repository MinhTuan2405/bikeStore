-- CRUD cơ bản

-- CREATE: Thêm khách hàng mới
INSERT INTO sales.customers (first_name, last_name, email, phone, street, city, state, zip_code)
VALUES ('tuan', 'minh', '23521718@mg.uit.edu.vn', '1234567890', '123 linh trung', 'Thu Duc', 'HCM', '70000');

-- READ: Lấy thông tin tất cả khách hàng vừa được thêm vào 
SELECT * FROM sales.customers
where first_name = 'tuan'

-- UPDATE: Cập nhật số điện thoại của khách hàng 
UPDATE sales.customers
SET phone = '0987654321'
WHERE first_name = 'tuan';

-- DELETE: Xóa khách hàng
DELETE FROM sales.customers
WHERE customer_id = 1446;


-- Lấy danh sách đơn hàng với tổng số lượng và tổng tiền
EXPLAIN ANALYZE
WITH order_summary AS (
    SELECT 
        order_id,
        SUM(quantity) AS total_quantity,
        SUM((list_price - list_price * discount) * quantity) AS total_amount
    FROM sales.order_items
    GROUP BY order_id
)
SELECT o.order_id, c.first_name, c.last_name, os.total_quantity, os.total_amount
FROM sales.orders o
JOIN order_summary os ON o.order_id = os.order_id
JOIN sales.customers c ON o.customer_id = c.customer_id;

-- Tính tổng tiền đơn hàng của mỗi khách hàng và xếp hạng
EXPLAIN ANALYZE
WITH customer_totals AS (
    SELECT 
        c.customer_id,
        c.first_name,
        c.last_name,
        SUM((oi.list_price - oi.list_price * oi.discount) * oi.quantity) AS total_spent
    FROM sales.customers c
    JOIN sales.orders o ON c.customer_id = o.customer_id
    JOIN sales.order_items oi ON o.order_id = oi.order_id
    GROUP BY c.customer_id, c.first_name, c.last_name
)

SELECT 
    *,
    RANK() OVER (ORDER BY total_spent DESC) AS rank
FROM customer_totals;


-- Tốc độ xoay vòng kho
EXPLAIN ANALYZE
SELECT
  p.product_name,
  SUM(oi.quantity) AS total_sold,
  SUM(st.quantity) AS total_stock,
  ROUND(SUM(oi.quantity)::numeric / NULLIF(SUM(st.quantity), 0), 2) AS turnover_rate
FROM production.products p
LEFT JOIN sales.order_items oi ON p.product_id = oi.product_id
LEFT JOIN production.stocks st ON p.product_id = st.product_id
GROUP BY p.product_name
ORDER BY turnover_rate DESC NULLS LAST;