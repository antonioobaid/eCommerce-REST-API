import  express  from "express"
const router = express.Router()
import {   
    sparaOrder
 } from '../controllers/orderController.js'

 router.post('/orders', sparaOrder)

 export default router