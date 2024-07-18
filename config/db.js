const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;


var path = require('path');
require("dotenv").config({ path: path.join(".env") });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL_APL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};
//MONGODB CONNECTION
module.exports = connectDB;
