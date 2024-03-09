const express = require('express')
const Product = require('../models/product')
const { handleResponse } = require('../utils/responses');

exports.placeKinguinOrder = async(req, res) => {
    const body = req.body;
    console.log('okkkkkk', body);
    const fetchProduct = await Product.findOne({_id: '65e8049f9f0c94be8c94ef6b'});
    if(fetchProduct.textQty > 0){
        console.log('okk')
    }else if(fetchProduct.qty > 0) {
        console.log('ok')
    }else{
        console.log('o')
    }
    console.log(fetchProduct)
    handleResponse(res, {message: "ok"})
}

