import express from 'express'
import prisma from '../../../database/prismaClient.js'
import convertDecimalToNumber from '../../../utils/formatResult.js'


const saleStat = express.Router ()

// 6. Tổng doanh thu theo tháng
saleStat.get ('/revenuepermonth', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
      SELECT
        DATE_TRUNC('month', o.order_date) AS month,
        SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
      FROM sales.orders o
      JOIN sales.order_items oi ON o.order_id = oi.order_id
      GROUP BY month
      ORDER BY month;
    `;
    const data = Analysis.map(element => {
      const d = new Date (element.month)
      d.setUTCDate(d.getUTCDate() + 1);
      const res = d.toISOString().slice (0, 7)
      return {
        month: res,
        total: element.total_revenue
      }
      
    });
    const formatted = convertDecimalToNumber(data);

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

// 7. Số lượng đơn hàng theo trạng thái
saleStat.get ('/numberofsale', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        order_status,
        COUNT(*) AS order_count
        FROM sales.orders
        GROUP BY order_status
        ORDER BY order_status;
    `;
    
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


// 8. Doanh thu theo cửa hàng
saleStat.get ('/storerevenue', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        s.store_name,
        SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
        FROM sales.orders o
        JOIN sales.order_items oi ON o.order_id = oi.order_id
        JOIN sales.stores s ON o.store_id = s.store_id
        GROUP BY s.store_name
        ORDER BY total_revenue DESC;
    `;
    
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


//  9. Tỷ lệ giảm giá trung bình theo đơn hàng
saleStat.get ('/discountaverage', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        o.order_id,
        ROUND(AVG(oi.discount), 2) AS average_discount
        FROM sales.orders o
        JOIN sales.order_items oi ON o.order_id = oi.order_id
        GROUP BY o.order_id
        ORDER BY average_discount DESC;
    `;
    
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


// 10. Thời gian trung bình để giao hàng
saleStat.get ('/rate/shippedaverage', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        ROUND(AVG(shipped_date - order_date), 2) AS avg_delivery_days
        FROM sales.orders
        WHERE shipped_date IS NOT NULL;
    `;
    
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



// 11. Tỷ lệ đơn hàng giao trễ
saleStat.get ('/rate/latedelivery', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        ROUND(
            100.0 * COUNT(*) FILTER (WHERE shipped_date > required_date) / COUNT(*), 2
        ) AS late_delivery_rate_percent
        FROM sales.orders
        WHERE shipped_date IS NOT NULL;
    `;
    
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


// 12. Tỷ lệ đơn hàng chưa được giao
saleStat.get ('/rate/undelivery', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        ROUND(
            100.0 * COUNT(*) FILTER (WHERE shipped_date IS NULL) / COUNT(*), 2
        ) AS undelivered_order_rate_percent
        FROM sales.orders;
    `;
    
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


// 13. Tỷ lệ đơn hàng hoàn thành
saleStat.get ('/rate/completeorder', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        ROUND(
            100.0 * COUNT(*) FILTER (WHERE shipped_date IS NOT NULL) / COUNT(*), 2
        ) AS completed_order_rate_percent
        FROM sales.orders;

    `;
    
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

// -- 14. Tốc độ xoay vòng kho
saleStat.get ('/turnover', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
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

    `;
    
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


export default saleStat