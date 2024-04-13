import express from 'express'
import dbConnect from './server.js'
import productRoutes from "./routes/productRoutes.js"
import orderProductRoutes from "./routes/orderProductRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from './routes/orderRoutes.js'
import { errorHandler, notFound } from './middleware/errormiddleware.js'



const app = express()

dbConnect()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Server running on port:  ' + PORT))



app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api' , productRoutes)
app.use('/api' , orderProductRoutes )
app.use('/api' , userRoutes)
app.use('/api' , orderRoutes )


app.use(notFound)
app.use(errorHandler)


export default app