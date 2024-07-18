// routes/users.js

const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

const cron = require('node-cron');
    router.get('/getStocks', stockController.getlatestData);


console.log('route')
// router.get('/', (req, res) => {
//     res.send('Home page of books route');
//   });

module.exports = router;