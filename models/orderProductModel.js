import { Schema, model } from 'mongoose'

const orderProductSchema = new Schema({
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }

} );

const orderProduct = model('orderProduct', orderProductSchema);

export default orderProduct



