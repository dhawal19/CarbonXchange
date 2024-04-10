const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/carbonXchange"),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        };
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed');
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB; 