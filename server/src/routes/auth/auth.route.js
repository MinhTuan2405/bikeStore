import express from 'express'
import loginRouter from '../../controllers/auth/login.controller.js'

const authRouter = express.Router ()

authRouter.use (loginRouter)
export default authRouter