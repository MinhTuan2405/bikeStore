import productStat from "../../controllers/products/stats/productStats.js";
import product from "../../controllers/products/action/crud.js";
import express from 'express'

const productRouter = express.Router ()

productRouter.use ('/action', product)
productRouter.use ('/stats', productStat)


export default productRouter