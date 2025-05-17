import apiRouter from "../../controllers/brand/crud.js";
import express from 'express'

const brandRouter = express.Router ()

brandRouter.use (apiRouter)


export default brandRouter