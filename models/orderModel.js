import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'user', 
        required: true
    },
    products:[
        {
            type: Schema.Types.ObjectId,
            ref: 'orderProduct',
            required: true
        }]
    }, { timestamps: true });

const order = model('order', orderSchema);

export default order;










