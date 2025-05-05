import { Router } from "express"
import gettALlBrand from '../controllers/testing.js'

const routers = Router ()

routers.get ('/allbrand', gettALlBrand)

export default routers
