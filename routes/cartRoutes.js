const express = require('express');
const router = express.Router();

const cartController = require('../Controllers/cartController')

router.get('/cart', cartController.cart)

module.exports = router;