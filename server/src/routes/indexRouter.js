import express from 'express'

// auth
import authRouter from './auth/auth.router.js'

const router = express.Router()

router.use ('/auth', authRouter)

export default router