
    import order from "../models/orderModel.js"; 
    import AsyncHandler from "express-async-handler";
    import User from "../models/userModel.js";
    import orderProduct from "../models/orderProductModel.js";



    export const createOrder = AsyncHandler(async (req, res) => {

        try{
            const user = await User.findById(req.userId)
            if (!user) {
                return res.status(404).json({ message: 'Användaren hittades inte' });
            }

            
            const productId = req.body.products
            if (!productId || productId.length === 0) {
                return res.status(400).json({ message: 'Inga produkter hittades i begäran' });
            }

        
            const products = await orderProduct.find({ _id: { $in: productId } });

            const newOrder = await order.create({ user: user._id, products: products });
            
            res.status(201).json({
                message: 'Order created successfully',
                order: newOrder
            });

        }catch(err){
            res.status(500).json({
                message: err.message,
                stack: process.env.NODE_ENV === "development" ? err.stack : null
            });
        }
    })


    export const getAllOrder = AsyncHandler(async (req, res) => {
    try{
        const orders = await order.find({}).populate({
            path: 'products',
            populate: {
                path: 'productId', // Du vill popula produkten här
                model: 'product'
            }
        });
        res.status(200).json(orders);
    }catch(err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }
    })



/*import order from "../models/orderModel.js"; 
import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import product from "../models/productModel.js"; // Importera Product-modellen


export const createOrder = AsyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'Användaren hittades inte' });
        }

        const productIds = req.body.products; // Hämta produkt-ID:n från begäranens body
        if (!productIds || productIds.length === 0) {
            return res.status(400).json({ message: 'Inga produkter hittades i begäran' });
        }

        // Hämta produkter baserat på de angivna ID:n
        const products = await product.find({ _id: { $in: productIds } });
        
        // Skapa en ny order med användar-ID och produkter
        const newOrder = await order.create({ user: user._id, products: products });
        
        res.status(201).json({
            message: 'Order created successfully',
            order: newOrder
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }
});

    

    export const getAllOrder = AsyncHandler(async (req, res) => {
        try{
            const orders = await order.find({}).populate({
                path: 'products.product'
            });
            res.status(200).json(orders);
        }catch(err) {
            res.status(500).json({
                message: err.message,
                stack: process.env.NODE_ENV === "development" ? err.stack : null
            });
        }
        })*/
    




