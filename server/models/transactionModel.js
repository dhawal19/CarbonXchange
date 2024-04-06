const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    hash:{
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pending'
    }
})

const Transaction = new mongoose.model('Transaction', transactionSchema);

module.exports = Transaction