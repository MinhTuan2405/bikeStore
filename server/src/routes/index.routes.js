import express from 'express'

// auth
import authRouter from './auth/auth.route.js'

// product
import productRouter from './products/product.route.js'

// sale
import saleRouter from './sales/sale.route.js'
import userRouter from './users/users.route.js'

// showroom
import showroomRouter from './showroom/showroom.route.js'

// staff
import staffRouter from './staff/staff.route.js'

const router = express.Router()

router.use ('/auth', authRouter)
router.use ('/product', productRouter)
router.use ('/sale', saleRouter)
router.use ('/user', userRouter)
router.use ('/showroom', showroomRouter)
router.use ('/staff', staffRouter)

export default router
