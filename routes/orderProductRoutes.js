import  express  from "express"
const router = express.Router()
import {   
    skapaProductId
 } from '../controllers/orderProductController.js'

 router.post('/orderProduct', skapaProductId )

 export default router