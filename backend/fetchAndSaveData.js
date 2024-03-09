require('dotenv').config()
const axios = require('axios');
const connectToMongoDb = require('./config/config')
const Product = require('./models/product');

let allProducts = [];
let currentPage = 1;
let condition = true;

const fetchDataAndSave = async () => {
    try {
        while (condition) {
            const response = await axios.get(`${process.env.KINGUIN_API_URL}/v1/products?page=${currentPage}`, {
                headers: {
                    'X-Api-Key': `${process.env.KINGUIN_API_KEY}`
                }
            });
            const products = response.data;

            const pageCount = Math.ceil(products.item_count / 25);

            if (products.length === 0) {
                break;
                process.exit(1);
            }

            allProducts = [...allProducts, ...products.results];

            if (currentPage === pageCount) {
                condition = false
                break;
            }
            currentPage++;

        }


    } catch (error) {
        console.error('Error fetching or saving data:', error);
        process.exit(1);
    }

    connectToMongoDb()
    try {
        await Product.deleteMany({});

        await Product.create(allProducts);
        console.log('Data fetched and saved successfully.');
        process.exit();
    }
    catch (err) {
        console.log('Error', err)
        process.exit(1);
    }
};



// Call the function to fetch and save data
fetchDataAndSave();
