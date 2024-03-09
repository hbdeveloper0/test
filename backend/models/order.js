
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    kinguinOrderId: {
        type: String,
        require: true
    },
    status: {
        type: String
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'User'
    // },
    userEmail: {
        type: String
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    }
}, { timestamps: true })

const Order = new mongoose.model('Order', orderSchema);
module.exports = Order;