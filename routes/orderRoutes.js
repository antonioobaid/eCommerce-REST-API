import  express  from "express"
const router = express.Router()
import {   
    createOrder,
    getAllOrder
 } from '../controllers/orderController.js'
import { verifyToken } from "../middleware/authmiddleware.js"

 router.post('/orders', verifyToken, createOrder )
 router.get("/orders" , verifyToken , getAllOrder )

 export default router