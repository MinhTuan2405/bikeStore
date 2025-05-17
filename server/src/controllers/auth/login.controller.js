import express from 'express';
import { verifyToken, test } from '../../middlewares/auth/verifytoken.js';
import prisma from '../../database/prismaClient.js';
import convertDecimalToNumber from '../../utils/formatResult.js';

const loginRouter = express.Router();



loginRouter.get('/login', verifyToken, test, async (req, res) => {
  try {
    const staffAnalysis = await prisma.$queryRaw`
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
