// controllers/userController.js


const cron = require('node-cron');
const axios = require('axios');
const connectDB = require('../config/db'); // Require the database configuration
// controllers/yourController.js
const YourModel = require('../models/stockModel');


connectDB();


async function fetchCoinGeckoData() {


  try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&tickers=aapl&cryptocurrency_info=True&per_page=10');
      return response.data;
  } catch (error) {
      console.error('Error fetching data from CoinGecko:', error);
      return null;
  }
}

async function storeDataInMongoDB(data) {

  try {
    data.map(x=>console.log(x.name))
    const newData = YourModel.insertMany(data)
      console.log(`New data inserted with id: ${savedData}`);
  } catch (error) {
      console.error('Error storing data in MongoDB:', error);
  } finally {
     // await client.close();
  }
}

fetchDataAndStore = async (req, res) => {
  try {
    const data = await fetchCoinGeckoData()
    if (data) {
      await storeDataInMongoDB(data);
  }
  } catch (err) {
    return err;
  }
};
exports.getlatestData = async (req, res) => {
  try {
    YourModel.find({}).then((data) => {
          if (data.length > 0) {
              return res.send(data);
          }
          else {
              return res.send('no data')
          }
      })
  } catch (e) {
      return error;
  }
};



// Schedule the fetch and store operation to run every 10 minutes
cron.schedule('*/1 * * * *', () => {
  console.log('Fetching data and storing to MongoDB...');
  fetchDataAndStore();
});



exports.listStocks = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

fetchDataAndStore()