import apiRouter from "../../controllers/category/crud.js";
import express from 'express'

const categoryRouter = express.Router ()

categoryRouter.use (apiRouter)


export default categoryRouter