import mongoose from "mongoose";
import order from "../models/orderProductModel.js"; 

export const sparaOrder = async (req, res) => {
    try {
        const { name, price, description, category, images } = req.body;
        if (!name || !price || !description || !category || !images) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }

        const newProduct = await order.create({ name, price, description, category, images });
        res.status(201).json({
            message: 'Product created successfully',
            product: newProduct
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }
}