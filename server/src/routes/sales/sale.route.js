import express from 'express'
import saleStat from '../../controllers/sales/stats/saleStat.js'
import { verifyToken } from '../../middlewares/auth/auth.middleware.js'

const saleRouter = express.Router()

// Stats routes
saleRouter.use('/stats', saleStat)

// Add direct routes for metrics
saleRouter.get('/metrics', (req, res, next) => {
  req.url = '/metrics'
  saleStat(req, res, next)
})

saleRouter.get('/dashboard', (req, res, next) => {
  req.url = '/dashboard'
  saleStat(req, res, next)
})

export default saleRouter