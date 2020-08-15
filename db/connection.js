const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI.toString(), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDB connected')
    } catch(error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;