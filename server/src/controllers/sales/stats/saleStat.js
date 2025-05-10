import express from 'express'
import prisma from '../../../database/prismaClient.js'
import convertDecimalToNumber from '../../../utils/formatResult.js'
import pool from '../../../database/postgres.js'

const saleStat = express.Router()

// 6. Tổng doanh thu theo tháng
saleStat.get('/revenuepermonth', async (req, res) => {
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
saleStat.get('/numberofsale', async (req, res) => {
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
saleStat.get('/storerevenue', async (req, res) => {
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

// 9. Tỷ lệ giảm giá trung bình theo đơn hàng
saleStat.get('/discountaverage', async (req, res) => {
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
saleStat.get('/rate/shippedaverage', async (req, res) => {
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
saleStat.get('/rate/latedelivery', async (req, res) => {
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
saleStat.get('/rate/undelivery', async (req, res) => {
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
saleStat.get('/rate/completeorder', async (req, res) => {
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

// 14. Tốc độ xoay vòng kho
saleStat.get('/turnover', async (req, res) => {
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

// Basic sales statistics
saleStat.get('/', async (req, res) => {
  try {
    const totalSalesQuery = `
      SELECT COUNT(DISTINCT o.order_id) as total_orders,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as total_revenue
      FROM sales.orders o
      JOIN sales.order_items oi ON o.order_id = oi.order_id
    `;
    
    const result = await pool.query(totalSalesQuery);
    
    res.status(200).json({
      total_orders: parseInt(result.rows[0].total_orders) || 0,
      total_revenue: parseFloat(result.rows[0].total_revenue) || 0
    });
  } catch (error) {
    console.error('Error fetching sales statistics:', error);
    res.status(500).json({ error: 'Failed to fetch sales statistics' });
  }
});

// Detailed sales metrics
saleStat.get('/metrics', async (req, res) => {
  try {
    // Sales by store
    const storeQuery = `
      SELECT s.store_id, s.store_name, 
             COUNT(DISTINCT o.order_id) as order_count,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as revenue
      FROM sales.stores s
      JOIN sales.orders o ON s.store_id = o.store_id
      JOIN sales.order_items oi ON o.order_id = oi.order_id
      GROUP BY s.store_id, s.store_name
      ORDER BY revenue DESC
    `;
    
    // Sales by category
    const categoryQuery = `
      SELECT c.category_id, c.category_name,
             COUNT(DISTINCT o.order_id) as order_count,
             SUM(oi.quantity) as units_sold,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as revenue
      FROM production.categories c
      JOIN production.products p ON c.category_id = p.category_id
      JOIN sales.order_items oi ON p.product_id = oi.product_id
      JOIN sales.orders o ON oi.order_id = o.order_id
      GROUP BY c.category_id, c.category_name
      ORDER BY revenue DESC
    `;
    
    // Sales by brand
    const brandQuery = `
      SELECT b.brand_id, b.brand_name,
             COUNT(DISTINCT o.order_id) as order_count,
             SUM(oi.quantity) as units_sold,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as revenue
      FROM production.brands b
      JOIN production.products p ON b.brand_id = p.brand_id
      JOIN sales.order_items oi ON p.product_id = oi.product_id
      JOIN sales.orders o ON oi.order_id = o.order_id
      GROUP BY b.brand_id, b.brand_name
      ORDER BY revenue DESC
    `;
    
    // Monthly sales trend (last 12 months)
    const monthlyTrendQuery = `
      SELECT TO_CHAR(o.order_date, 'YYYY-MM') as month,
             COUNT(DISTINCT o.order_id) as order_count,
             SUM(oi.quantity) as units_sold,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as revenue
      FROM sales.orders o
      JOIN sales.order_items oi ON o.order_id = oi.order_id
      WHERE o.order_date >= CURRENT_DATE - INTERVAL '12 months'
      GROUP BY TO_CHAR(o.order_date, 'YYYY-MM')
      ORDER BY month
    `;
    
    // Top selling products
    const topProductsQuery = `
      SELECT p.product_id, p.product_name, b.brand_name, c.category_name,
             SUM(oi.quantity) as units_sold,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as revenue
      FROM production.products p
      JOIN production.brands b ON p.brand_id = b.brand_id
      JOIN production.categories c ON p.category_id = c.category_id
      JOIN sales.order_items oi ON p.product_id = oi.product_id
      GROUP BY p.product_id, p.product_name, b.brand_name, c.category_name
      ORDER BY units_sold DESC
      LIMIT 10
    `;
    
    // Order status distribution
    const orderStatusQuery = `
      SELECT order_status, COUNT(*) as count
      FROM sales.orders
      GROUP BY order_status
    `;
    
    const [
      storeResults,
      categoryResults,
      brandResults,
      monthlyTrendResults,
      topProductsResults,
      orderStatusResults
    ] = await Promise.all([
      pool.query(storeQuery),
      pool.query(categoryQuery),
      pool.query(brandQuery),
      pool.query(monthlyTrendQuery),
      pool.query(topProductsQuery),
      pool.query(orderStatusQuery)
    ]);
    
    // Format response
    const salesByStore = storeResults.rows.map(row => ({
      store_id: row.store_id,
      store_name: row.store_name,
      order_count: parseInt(row.order_count) || 0,
      revenue: parseFloat(row.revenue) || 0
    }));
    
    const salesByCategory = categoryResults.rows.map(row => ({
      category_id: row.category_id,
      category_name: row.category_name,
      order_count: parseInt(row.order_count) || 0,
      units_sold: parseInt(row.units_sold) || 0,
      revenue: parseFloat(row.revenue) || 0
    }));
    
    const salesByBrand = brandResults.rows.map(row => ({
      brand_id: row.brand_id,
      brand_name: row.brand_name,
      order_count: parseInt(row.order_count) || 0,
      units_sold: parseInt(row.units_sold) || 0,
      revenue: parseFloat(row.revenue) || 0
    }));
    
    const monthlyTrend = monthlyTrendResults.rows.map(row => ({
      month: row.month,
      order_count: parseInt(row.order_count) || 0,
      units_sold: parseInt(row.units_sold) || 0,
      revenue: parseFloat(row.revenue) || 0
    }));
    
    const topProducts = topProductsResults.rows.map(row => ({
      product_id: row.product_id,
      product_name: row.product_name,
      brand_name: row.brand_name,
      category_name: row.category_name,
      units_sold: parseInt(row.units_sold) || 0,
      revenue: parseFloat(row.revenue) || 0
    }));
    
    // Map order status codes to human-readable names
    const orderStatusMap = {
      1: 'Pending',
      2: 'Processing',
      3: 'Rejected',
      4: 'Completed'
    };
    
    const orderStatusDistribution = orderStatusResults.rows.map(row => ({
      status: orderStatusMap[row.order_status] || `Status ${row.order_status}`,
      count: parseInt(row.count) || 0
    }));
    
    // Calculate totals
    const totalRevenue = salesByStore.reduce((sum, store) => sum + store.revenue, 0);
    const totalOrders = salesByStore.reduce((sum, store) => sum + store.order_count, 0);
    const totalUnitsSold = salesByCategory.reduce((sum, cat) => sum + cat.units_sold, 0);
    
    res.status(200).json({
      summary: {
        total_revenue: totalRevenue,
        total_orders: totalOrders,
        total_units_sold: totalUnitsSold
      },
      sales_by_store: salesByStore,
      sales_by_category: salesByCategory,
      sales_by_brand: salesByBrand,
      monthly_trend: monthlyTrend,
      top_products: topProducts,
      order_status_distribution: orderStatusDistribution
    });
  } catch (error) {
    console.error('Error fetching sales metrics:', error);
    res.status(500).json({ error: 'Failed to fetch sales metrics' });
  }
});

// Sales dashboard for quick overview
saleStat.get('/dashboard', async (req, res) => {
  try {
    // Total sales and revenue
    const totalsQuery = `
      SELECT COUNT(DISTINCT o.order_id) as total_orders,
             SUM(oi.quantity) as total_units,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as total_revenue
      FROM sales.orders o
      JOIN sales.order_items oi ON o.order_id = oi.order_id
    `;
    
    // Recent trend (last 6 months)
    const trendQuery = `
      SELECT TO_CHAR(o.order_date, 'YYYY-MM') as month,
             COUNT(DISTINCT o.order_id) as order_count,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as revenue
      FROM sales.orders o
      JOIN sales.order_items oi ON o.order_id = oi.order_id
      WHERE o.order_date >= CURRENT_DATE - INTERVAL '6 months'
      GROUP BY TO_CHAR(o.order_date, 'YYYY-MM')
      ORDER BY month
    `;
    
    // Top 5 selling categories
    const topCategoriesQuery = `
      SELECT c.category_name,
             SUM(oi.quantity) as units_sold
      FROM production.categories c
      JOIN production.products p ON c.category_id = p.category_id
      JOIN sales.order_items oi ON p.product_id = oi.product_id
      GROUP BY c.category_name
      ORDER BY units_sold DESC
      LIMIT 5
    `;
    
    // Recent orders
    const recentOrdersQuery = `
      SELECT o.order_id, o.order_date, o.order_status,
             c.first_name || ' ' || c.last_name as customer_name,
             s.store_name,
             COUNT(oi.item_id) as item_count,
             SUM(oi.quantity * oi.list_price * (1 - oi.discount)) as total
      FROM sales.orders o
      JOIN sales.customers c ON o.customer_id = c.customer_id
      JOIN sales.stores s ON o.store_id = s.store_id
      JOIN sales.order_items oi ON o.order_id = oi.order_id
      GROUP BY o.order_id, o.order_date, o.order_status, customer_name, s.store_name
      ORDER BY o.order_date DESC
      LIMIT 5
    `;
    
    const [
      totalsResult,
      trendResult,
      topCategoriesResult,
      recentOrdersResult
    ] = await Promise.all([
      pool.query(totalsQuery),
      pool.query(trendQuery),
      pool.query(topCategoriesQuery),
      pool.query(recentOrdersQuery)
    ]);
    
    // Format response
    const totals = {
      total_orders: parseInt(totalsResult.rows[0].total_orders) || 0,
      total_units: parseInt(totalsResult.rows[0].total_units) || 0,
      total_revenue: parseFloat(totalsResult.rows[0].total_revenue) || 0
    };
    
    const trend = trendResult.rows.map(row => ({
      month: row.month,
      order_count: parseInt(row.order_count) || 0,
      revenue: parseFloat(row.revenue) || 0
    }));
    
    const topCategories = topCategoriesResult.rows.map(row => ({
      category_name: row.category_name,
      units_sold: parseInt(row.units_sold) || 0
    }));
    
    // Map order status codes to human-readable names
    const orderStatusMap = {
      1: 'Pending',
      2: 'Processing',
      3: 'Rejected',
      4: 'Completed'
    };
    
    const recentOrders = recentOrdersResult.rows.map(row => ({
      order_id: row.order_id,
      order_date: row.order_date,
      status: orderStatusMap[row.order_status] || `Status ${row.order_status}`,
      customer_name: row.customer_name,
      store_name: row.store_name,
      item_count: parseInt(row.item_count) || 0,
      total: parseFloat(row.total) || 0
    }));
    
    res.status(200).json({
      totals,
      trend,
      top_categories: topCategories,
      recent_orders: recentOrders
    });
  } catch (error) {
    console.error('Error fetching dashboard metrics:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard metrics' });
  }
});

export default saleStat