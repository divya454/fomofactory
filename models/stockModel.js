// models/userModel.js

const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  id: {
    type: String,

  },
  symbol: {
    type: String,
  },
  name: {
    type: String
  },
  image: {
    type: String
  },
  current_price: {
    type: String
  },
  market_cap: {
    type: String
  },
  market_cap_rank: {
    type: String
  },
  fully_diluted_valuation: {
    type: String
  },
  total_volume: {
    type: String
  },
  high_24h: {
    type: String
  },
  low_24h: {
    type: String
  },
  price_change_24h: {
    type: String
  },
  price_change_percentage_24h: {
    type: String
  },
  market_cap_change_24h: {
    type: String
  },
  market_cap_change_percentage_24h: {
    type: String
  },
  circulating_supply: {
    type: String
  },
  total_supply: {
    type: String
  },
  max_supply: {
    type: String
  },
  ath: {
    type: String
  },
  ath_change_percentage: {
    type: String
  },
  ath_date: {
    type: String
  },
  atl: {
    type: String
  },
  atl_change_percentage: {
    type: String
  },
  atl_date: {
    type: String
  }, 
  roi: {
    type: Object
    
  },
  last_updated: {
    type: String
  }
})

const stockdata = mongoose.model("stocks", StockSchema);
 module.exports =stockdata;