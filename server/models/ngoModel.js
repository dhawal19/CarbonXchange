const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    website_url: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    history: {
        founder: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    },
})

const Ngo = new mongoose.model('ngos', ngoSchema);

module.exports = Ngo;