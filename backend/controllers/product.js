const express = require('express')
const Product  = require('../models/product')
const { handleResponse } = require('../utils/responses')

exports.saveAllKinguinProducts = async (req, res) => {
    // console.log(req.body.products.length) ;
    const body = req.body.products;
    await Product.create(body);
    handleResponse(res, {message: 'OK'})
}

exports.getAllProducts= async (req, res) => {
    try{
        const products = await Product.find({"offers.availableQty": {$gt: 0}}).limit(200).select('name originalName price qty textQty coverImageOriginal coverImage, productId');
        handleResponse(res, {getProducts: products})
    }
    catch (err) {
        console.log('Error', err)
    }
}

exports.getProduct = async (req, res) => {
    const body = req.body;
    try{
        const productData = await Product.findOne({
            productId: body.productId
        });
        handleResponse(res, {product: productData})
    }
    catch (err) {
        console.log('Error', err)
    }
}


