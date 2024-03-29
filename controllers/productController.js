import mongoose from "mongoose";
import Product from "../models/productModel.js"; 
import product from "../models/productModel.js";

mongoose.set('debug', true);

export const getProducts = async (req, res) => {
   try {
      const products = await Product.find();
      res.status(200).json(products);
   } catch (err) {
      res.status(500).json({
         message: err.message,
         stack: process.env.NODE_ENV === "development" ? err.stack : null
      });
   }
}


export const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.isValidObjectId(id)) {
            res.status(400).json({
                message: 'You need to provide a valid objectId'
            });
            return;
        }

        const oneProduct = await Product.findById(id); 
        res.status(200).json(oneProduct);
    } catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, price, description, category, images } = req.body;
        if (!name || !price || !description || !category || !images) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }

        const newProduct = await Product.create({ name, price, description, category, images });
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

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        if(!mongoose.isValidObjectId(id)) {
          res.status(400)
          throw new Error('You need to provide a valid ObjectId')
        }
    
        const updateOneProduct = await product.findByIdAndUpdate(id, req.body, { new: true })
    
        if(!updateOneProduct ) {
          res.status(404)
          throw new Error('Resource not found')
        }
        
        res.status(200).json(updateOneProduct)
    
    
      } catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        if(!mongoose.isValidObjectId(id)) {
          res.status(400)
          throw new Error('You need to provide a valid ObjectId')
        }
    
        const deleteOneProduct = await product.findByIdAndDelete(id)
    
        if(!deleteOneProduct) {
          res.status(404)
          throw new Error('Resource not found')
        }
    
        res.status(200).json( deleteOneProduct._id )
    
      } catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }
}

export const messagesProduct = async (req, res) => {
    try{
     const { name, email, message } = req.body;
        if (!name || !email || !message ) {
        return res.status(400).json({
            message: 'Missing required fields'
        });   
    }
    res.status(200).json({ message: 'Message sent successfully' });

    }catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }
    
}
