const express = require('express')
const router = express.Router()
const { validateRequest } = require('../middlewares/validateRequest')
const { body } = require("express-validator");
const { saveAllKinguinProducts, getAllProducts, getProduct } = require('../controllers/product')

router.post(
    '/saveKinguinProducts',
    validateRequest,
    saveAllKinguinProducts
);

router.get(
    '/getAllProducts',
    validateRequest,
    getAllProducts
)

router.post(
    '/getProduct',
    [
        body('productId').notEmpty().withMessage('Product Id is required')
    ],
    validateRequest,
    getProduct
)

module.exports = router