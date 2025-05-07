import express from 'express'
import userStat from '../../controllers/users/stats/userStat.js'

const userRouter = express.Router ()

userRouter.use ('/stats', userStat)

export default userRouter