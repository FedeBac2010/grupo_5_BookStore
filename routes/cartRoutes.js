const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartController');

router.get('/cart.ejs', (req, res) =>{
    res.render('/cart.ejs');
});
module.exports = router;