const express = require('express')
const router = express.Router()
const { body } = require("express-validator");
const { validateRequest } = require('../middlewares/validateRequest');
const { placeKinguinOrder } = require('../controllers/order')

router.post(
    '/place-kinguin-order',
    [
        body('paymentId').notEmpty().withMessage('Payment Id is required'),
        body('productId').notEmpty().withMessage('Product Id is required'),
        body('email').notEmpty().withMessage('User Email is required'),
    ],
    placeKinguinOrder
)

module.exports = router