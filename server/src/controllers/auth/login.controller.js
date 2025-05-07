import express from 'express';
import { verifyToken, test } from '../../middlewares/auth/verifytoken.js';
import prisma from '../../database/prismaClient.js';

const loginRouter = express.Router();

// Hàm xử lý BigInt và Decimal (Prisma Decimal.js)
function normalizeValue(value) {
  if (typeof value === 'bigint') {
    return value.toString(); // hoặc Number(value) nếu chắc chắn nhỏ
  }

  // Prisma Decimal object (Decimal.js)
  if (
    typeof value === 'object' &&
    value !== null &&
    typeof value.toNumber === 'function'
  ) {
    return value.toNumber(); // hoặc .toString() nếu muốn dạng text
  }

  return value;
}

function convertDecimalToNumber(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertDecimalToNumber);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, convertDecimalToNumber(normalizeValue(value))])
    );
  } else {
    return normalizeValue(obj);
  }
}

loginRouter.get('/login', verifyToken, test, async (req, res) => {
  try {
    const staffAnalysis = await prisma.$queryRaw`
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

    const formatted = convertDecimalToNumber(staffAnalysis);

    res.status(200).json({
      message: "success",
      data: formatted
    });
  } catch (err) {
    console.error("Error in /login route:", err);
    res.status(500).json({
      message: "internal server error",
      error: err.message
    });
  }
});

export default loginRouter;
