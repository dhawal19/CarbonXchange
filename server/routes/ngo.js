const express = require('express');
const router = express.Router();
const {handleNgo} = require('../controllers/ngoController')

router.get('/', handleNgo);

module.exports = router;