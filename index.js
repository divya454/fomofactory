const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cron = require('node-cron');
const routes = require('./routes/stockroute')
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors());
app.use(bodyparser.json());
app.use(express.json())
  app.use('/api', routes);

// Define routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports=app;
