const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
    },
    originalName: {
        type: String
    },
    productId: {
        type: String
    },
    kinguinId: {
        type: Number
    },
    qty: {
        type: Number
    },
    textQty: {
        type: Number
    },
    totalQty: {
        type: Number
    },
    price: {
        type: Number
    },
    description: {
        type: String,
    },
    platform: {
        type: String
    },
    releaseDate: {
        type: String
    },
    isPreorder: {
        type: String
    },
    regionId: {
        type: Number
    },
    regionalLimitations: {
        type: String
    },
    metacriticScore: {
        type: Number
    },
    activationDetails: {
        type: String
    },
    steam: {
        type: String
    },
    cheapestOfferId: {
        type: Array,
    },
    offers: {
        type: Array
    },
    offersCount: {
        type: Number
    },
    merchantName: {
        type: Array
    },
    developers: {
        type: Array,
    },
    publishers: {
        type: Array,
    },
    genres: {
        type: Array,
    },
    languages: {
        type: Array
    },
    systemRequirements: {
        type: Array
    },
    tags: {
        type: Array
    },
    coverImage: {
        type: String,
    },
    coverImageOriginal: {
        type: String,
    },
    images: {
        type: Object
    },
    screenshots: {
        type: Array
    },
    videos: {
        type: Array
    },
    kinguinUpdatedAt: {
        type: String
    }
},{timestamps: true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product