-- Thống kê các metrics bán hàng của cửa hàng xe đạp
-- I. PRODUCT-RELATED QUERIES

-- 1. Top 5 sản phẩm bán chạy nhất
WITH RankedProducts AS (
  SELECT
    p.product_name,
    SUM(oi.quantity) AS total_quantity_sold,
    SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue,
    DENSE_RANK() OVER (ORDER BY SUM(oi.quantity) DESC) AS rank
  FROM sales.order_items oi
  JOIN production.products p ON oi.product_id = p.product_id
  GROUP BY p.product_name
)
SELECT
  product_name,
  total_quantity_sold,
  total_revenue
FROM
  RankedProducts
WHERE
  rank <= 5;

-- 2. Doanh thu theo thương hiệu sản phẩm
SELECT
  b.brand_name,
  SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
FROM sales.order_items oi
JOIN production.products p ON oi.product_id = p.product_id
JOIN production.brands b ON p.brand_id = b.brand_id
GROUP BY b.brand_name
ORDER BY total_revenue DESC;

-- 3. Doanh thu theo loại sản phẩm (category)
SELECT
  c.category_name,
  SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
FROM sales.order_items oi
JOIN production.products p ON oi.product_id = p.product_id
JOIN production.categories c ON p.category_id = c.category_id
GROUP BY c.category_name
ORDER BY total_revenue DESC;

-- 4. Lượng tồn kho hiện tại theo từng sản phẩm
SELECT
  p.product_name,
  SUM(st.quantity) AS stock_quantity
FROM production.stocks st
JOIN production.products p ON st.product_id = p.product_id
GROUP BY p.product_name
ORDER BY stock_quantity DESC;

-- 5. Số lượng sản phẩm bán theo năm sản xuất
SELECT
  p.model_year,
  SUM(oi.quantity) AS total_quantity_sold
FROM sales.order_items oi
JOIN production.products p ON oi.product_id = p.product_id
GROUP BY p.model_year
ORDER BY p.model_year DESC;

-- II. SALES-RELATED QUERIES

-- 6. Tổng doanh thu theo tháng
SELECT
  DATE_TRUNC('month', o.order_date) AS month,
  SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
FROM sales.orders o
JOIN sales.order_items oi ON o.order_id = oi.order_id
GROUP BY month
ORDER BY month;

-- 7. Số lượng đơn hàng theo trạng thái
SELECT
  order_status,
  COUNT(*) AS order_count
FROM sales.orders
GROUP BY order_status
ORDER BY order_status;

-- 8. Doanh thu theo cửa hàng
SELECT
  s.store_name,
  SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
FROM sales.orders o
JOIN sales.order_items oi ON o.order_id = oi.order_id
JOIN sales.stores s ON o.store_id = s.store_id
GROUP BY s.store_name
ORDER BY total_revenue DESC;

-- 9. Tỷ lệ giảm giá trung bình theo đơn hàng
SELECT
  o.order_id,
  ROUND(AVG(oi.discount), 2) AS average_discount
FROM sales.orders o
JOIN sales.order_items oi ON o.order_id = oi.order_id
GROUP BY o.order_id
ORDER BY average_discount DESC;

-- 10. Thời gian trung bình để giao hàng
SELECT
  ROUND(AVG(DATE_PART('day', shipped_date - order_date)), 2) AS avg_delivery_days
FROM sales.orders
WHERE shipped_date IS NOT NULL;

-- 11. Tỷ lệ đơn hàng giao trễ
SELECT
  ROUND(
    100.0 * COUNT(*) FILTER (WHERE shipped_date > required_date) / COUNT(*), 2
  ) AS late_delivery_rate_percent
FROM sales.orders
WHERE shipped_date IS NOT NULL;

-- 12. Tỷ lệ đơn hàng chưa được giao
SELECT
  ROUND(
    100.0 * COUNT(*) FILTER (WHERE shipped_date IS NULL) / COUNT(*), 2
  ) AS undelivered_order_rate_percent
FROM sales.orders;

-- 13. Tỷ lệ đơn hàng hoàn thành
SELECT
  ROUND(
    100.0 * COUNT(*) FILTER (WHERE shipped_date IS NOT NULL) / COUNT(*), 2
  ) AS completed_order_rate_percent
FROM sales.orders;

-- 14. Tốc độ xoay vòng kho
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

-- III. USER-RELATED QUERIES

-- 15. Doanh thu theo nhân viên bán hàng
SELECT
  s.first_name || ' ' || s.last_name AS staff_name,
  SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
FROM sales.orders o
JOIN sales.order_items oi ON o.order_id = oi.order_id
JOIN sales.staffs s ON o.staff_id = s.staff_id
GROUP BY staff_name
ORDER BY total_revenue DESC;

-- 16. Phân tích nhân viên: tổng đơn, doanh thu, đơn hàng trễ
SELECT
  s.staff_id,
  s.first_name || ' ' || s.last_name AS staff_name,
  COUNT(DISTINCT o.order_id) AS total_orders,
  SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_sales,
  COUNT(CASE WHEN o.shipped_date > o.required_date THEN 1 END) AS late_orders
FROM sales.staffs s
JOIN sales.orders o ON s.staff_id = o.staff_id
JOIN sales.order_items oi ON o.order_id = oi.order_id
GROUP BY s.staff_id, staff_name
ORDER BY total_sales DESC;

-- 17. Khách hàng hoạt động nhiều nhất
SELECT
  c.customer_id,
  c.first_name || ' ' || c.last_name AS customer_name,
  COUNT(DISTINCT o.order_id) AS order_count,
  SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_spent
FROM sales.customers c
JOIN sales.orders o ON c.customer_id = o.customer_id
JOIN sales.order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id, customer_name
ORDER BY total_spent DESC;

-- 18. Tỷ lệ đơn hàng theo từng thành phố
SELECT
  c.city,
  COUNT(o.order_id) AS order_count
FROM sales.orders o
JOIN sales.customers c ON o.customer_id = c.customer_id
GROUP BY c.city
ORDER BY order_count DESC;

-- 19. Tỷ lệ khách hàng mới mỗi tháng
WITH first_orders AS (
  SELECT
    customer_id,
    MIN(order_date) AS first_order_date
  FROM sales.orders
  GROUP BY customer_id
)
SELECT
  DATE_TRUNC('month', first_order_date) AS month,
  COUNT(*) AS new_customers
FROM first_orders
GROUP BY month
ORDER BY month;

-- 20. Quản lý và nhân viên dưới quyền
SELECT
  m.staff_id AS manager_id,
  m.first_name || ' ' || m.last_name AS manager_name,
  COUNT(e.staff_id) AS staff_count
FROM sales.staffs m
JOIN sales.staffs e ON m.staff_id = e.manager_id
GROUP BY m.staff_id, manager_name
ORDER BY staff_count DESC;
