import  express  from "express"
const router = express.Router()
import {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    messagesProduct
 } from '../controllers/productController.js'

 router.get('/products/', getProducts)

 router.get('/products/:id', getProduct)

 router.post('/orders', createProduct)

 router.put('/products/:id', updateProduct)

 router.delete('/products/:id', deleteProduct)

 router.post('/messages', messagesProduct)

export default router

