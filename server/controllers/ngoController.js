const Ngo = require('../models/ngoModel');

const handleNgo = async (req, res) => {
    try {
        const ngos = await Ngo.find();
        console.log(ngos);
        res.status(200).json(ngos);
    }
    catch (err) {
        res.json({ message: err });
    }
}

module.exports = { handleNgo };