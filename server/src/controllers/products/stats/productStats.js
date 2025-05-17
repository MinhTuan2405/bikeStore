import express from 'express'
import prisma from '../../../database/prismaClient.js';
import convertDecimalToNumber from '../../../utils/formatResult.js';
const productStat = express.Router ()

// 1. Top sản phẩm bán chạy nhất
productStat.get ('/top/:id', async (req, res) => {
    try {
     const ranking = parseInt(req.params.id, 10);
     const safeRanking = isNaN(ranking) ? 5 : ranking;
        
    const Analysis = await prisma.$queryRaw`
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
            rank <= ${safeRanking};
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


// 2. Doanh thu theo thương hiệu sản phẩm
productStat.get ('/revenue', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        b.brand_name,
        SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
        FROM sales.order_items oi
        JOIN production.products p ON oi.product_id = p.product_id
        JOIN production.brands b ON p.brand_id = b.brand_id
        GROUP BY b.brand_name
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


// 3. Doanh thu theo loại sản phẩm (category)
productStat.get ('/categoryrevenue', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        c.category_name,
        SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
        FROM sales.order_items oi
        JOIN production.products p ON oi.product_id = p.product_id
        JOIN production.categories c ON p.category_id = c.category_id
        GROUP BY c.category_name
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


// 4. Lượng tồn kho hiện tại theo từng sản phẩm
productStat.get ('/inventory', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        p.product_name,
        SUM(st.quantity) AS stock_quantity
        FROM production.stocks st
        JOIN production.products p ON st.product_id = p.product_id
        GROUP BY p.product_name
        ORDER BY stock_quantity DESC;
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


// 5. Số lượng sản phẩm bán theo năm sản xuất
productStat.get ('/saleperyear', async (req, res) => {
    try {
    const Analysis = await prisma.$queryRaw`
        SELECT
        p.model_year,
        SUM(oi.quantity) AS total_quantity_sold
        FROM sales.order_items oi
        JOIN production.products p ON oi.product_id = p.product_id
        GROUP BY p.model_year
        ORDER BY p.model_year DESC;
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

export default productStat