import express from 'express'
import prisma from '../../../database/prismaClient.js'
import convertDecimalToNumber from '../../../utils/formatResult.js'


const userStat = express.Router ()

// 15. Doanh thu theo nhân viên bán hàng
userStat.get ('/staffrevenue', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        s.first_name || ' ' || s.last_name AS staff_name,
        SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
        FROM sales.orders o
        JOIN sales.order_items oi ON o.order_id = oi.order_id
        JOIN sales.staffs s ON o.staff_id = s.staff_id
        GROUP BY staff_name
        ORDER BY total_revenue DESC;
    `;
    console.log (Analysis.month)
    const formatted = convertDecimalToNumber(Analysis);

    
    res.status(200).json({
        message: "success",
        data: formatted
     });
    } catch (err) {
        res.status(500).json({
          message: "internal server error",
          error: err.message
        });
      }
})


// 16. Phân tích nhân viên: tổng đơn, doanh thu, đơn hàng trễ
userStat.get ('/staffanalyse', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
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
    `;
    console.log (Analysis.month)
    const formatted = convertDecimalToNumber(Analysis);

    
    res.status(200).json({
        message: "success",
        data: formatted
     });
    } catch (err) {
        res.status(500).json({
          message: "internal server error",
          error: err.message
        });
      }
})


// 17. Khách hàng hoạt động nhiều nhất
userStat.get ('/customer/mostactive', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
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
    `;
    console.log (Analysis.month)
    const formatted = convertDecimalToNumber(Analysis);

    
    res.status(200).json({
        message: "success",
        data: formatted
     });
    } catch (err) {
        res.status(500).json({
          message: "internal server error",
          error: err.message
        });
      }
})

// 18. Tỷ lệ đơn hàng theo từng thành phố
userStat.get ('/rate/orders', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        c.city,
        COUNT(o.order_id) AS order_count
        FROM sales.orders o
        JOIN sales.customers c ON o.customer_id = c.customer_id
        GROUP BY c.city
        ORDER BY order_count DESC;
    `;
    console.log (Analysis.month)
    const formatted = convertDecimalToNumber(Analysis);

    
    res.status(200).json({
        message: "success",
        data: formatted
     });
    } catch (err) {
        res.status(500).json({
          message: "internal server error",
          error: err.message
        });
      }
})



// 19. Tỷ lệ khách hàng mới mỗi tháng
userStat.get ('/rate/newcustomers', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        WITH first_orders AS (
        SELECT
            customer_id,
            MIN(order_date) AS first_order_date
        FROM sales.orders
        GROUP BY customer_id
        )
        SELECT
        TO_CHAR(first_order_date, 'YYYY-MM') AS month_year,
        COUNT(*) AS new_customers
        FROM first_orders
        GROUP BY month_year
        ORDER BY month_year;
    `;
    console.log (Analysis.month)
    const formatted = convertDecimalToNumber(Analysis);

    
    res.status(200).json({
        message: "success",
        data: formatted
     });
    } catch (err) {
        res.status(500).json({
          message: "internal server error",
          error: err.message
        });
      }
})


// 20. Quản lý và nhân viên dưới quyền
userStat.get ('/manager', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        m.staff_id AS manager_id,
        m.first_name || ' ' || m.last_name AS manager_name,
        COUNT(e.staff_id) AS staff_count
        FROM sales.staffs m
        JOIN sales.staffs e ON m.staff_id = e.manager_id
        GROUP BY m.staff_id, manager_name
        ORDER BY staff_count DESC;
    `;
    console.log (Analysis.month)
    const formatted = convertDecimalToNumber(Analysis);

    
    res.status(200).json({
        message: "success",
        data: formatted
     });
    } catch (err) {
        res.status(500).json({
          message: "internal server error",
          error: err.message
        });
      }
})


export default userStat