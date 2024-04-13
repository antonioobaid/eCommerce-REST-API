import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        require: true
    }
} , { timestamps: true })

const user = model('user', userSchema)


export default user
