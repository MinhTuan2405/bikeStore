import express from 'express'
import saleStat from '../../controllers/sales/stats/saleStat.js'

const saleRouter = express.Router ()

saleRouter.use ('/stats', saleStat)

export default saleRouter