const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.DATABASE_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
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