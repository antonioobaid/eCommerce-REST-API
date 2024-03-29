import express from 'express'
import dbConnect from './server.js'
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from './models/orderProductModel.js'
const app = express()

dbConnect()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Server running on port:  ' + PORT))



app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api' , productRoutes)


export default app