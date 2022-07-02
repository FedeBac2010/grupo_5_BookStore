const express = require('express');
const router = express.Router();
const productosController = require('../Controllers/productosController');

router.get('/detalle-producto.ejs', (req, res) => {
    res.render('products/detalle-producto');
});


module.exports = router;

