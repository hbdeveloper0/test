const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'test'
    },
    email: {
        email: String,
        require: true,
        unique: true
    },
    type: {
        type: String,
        default: 'user'
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Order'
    }]
}, { timestamps: true })

const User = new mongoose.model('User', userSchema);
module.exports = User;