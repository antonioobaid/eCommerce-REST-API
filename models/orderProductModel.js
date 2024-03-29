import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
  products: [{
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
});

const order = model('orderProduct', orderSchema);

export default order