import  express  from "express"
const router = express.Router()
import {   
    Register,
    login

 } from '../controllers/userController.js'


 router.post('/auth/register', Register)
 router.post('/auth/login', login )


 export default router