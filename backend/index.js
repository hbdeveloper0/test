require('dotenv').config()
const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes')

var corsOptions = {
    origin: [
        process.env.REACT_APP_URL
    ]
}

const connectToMongoDb = require('./config/config')
connectToMongoDb();

// Increase payload size limit (e.g., 10MB)  //this is for store all games 
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors(corsOptions))

//convert json in the body
app.use(express.json());

app.use('/api/v1', router);

// app.post('https://0a3f6d5d-2493-49d8-b85d-db6d589665f7.mock.pstmn.io/update-status', (req, res) => {
    
//     console.log(req.body)
// })

//product update webhook end url
// app.post('/update-product', (req, res) => {
//     console.log('update-product', req.body)
// });

//order status change webhook end url
// app.post('/update-status', (req, res) => {
//     console.log('update-status', req.body)
// });

// //order status complete webhook end url
// app.post('/order-completed', (req, res) => {
//     console.log('complete-status', req.body)
// });




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});