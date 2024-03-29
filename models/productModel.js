import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
    type: String,
    required: true
  },
    price: {
    type: Number,
  },
  description: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },                
  images: [{
    type: String,
    required: true
  }],
  
}, { timestamps: true })


const product = model('product', productSchema)


export default product