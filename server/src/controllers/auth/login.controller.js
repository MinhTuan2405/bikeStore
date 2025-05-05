import express from 'express'
import { verifyToken, test } from '../../middlewares/auth/verifytoken.js'
const loginRouter = express.Router ()

loginRouter.get ('/login', verifyToken, test, (req, res) => {
    res.status (200).json ({
        message: "success",
        data: {
            token: 'abc',
            refresh: "edf"
        }
    })
})

loginRouter.get ('/test', (req, res) => {
    res.send ('duma chay roi')
})


export default loginRouter
