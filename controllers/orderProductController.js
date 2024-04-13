import orderProduct from "../models/orderProductModel.js"; 
import Product from "../models/productModel.js";
import AsyncHandler from "express-async-handler";

export const skapaProductId = AsyncHandler(async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Produkten hittades inte' });
        }

        const OrderProduct = await orderProduct.create({ productId: product._id, quantity });
        

        res.status(201).json({ products: OrderProduct });

    } catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }
});



