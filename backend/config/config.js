const mongoose = require('mongoose')
require('dotenv').config()

const connectToMongoDb = () => {
    try{
        mongoose.connect(process.env.MongoDbUrl).then(() => {
            console.log('Connected to MongoDB')
        })
    }
    catch(err) {
        console.log('DB Connection Error: ', err)
    }
}

module.exports = connectToMongoDb;
