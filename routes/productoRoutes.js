const express = require('express');
const router = express.Router();

const productosController = require('../Controllers/productosController')

router.get('/detalle-producto', productosController.detalle)

module.exports = router;