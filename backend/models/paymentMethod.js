const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
    name: {
        type: String
    },

});

const PaymentMethod = new mongoose.model('PaymentMethod', paymentMethodSchema, 'payment_methods')