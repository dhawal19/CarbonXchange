const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI),{
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