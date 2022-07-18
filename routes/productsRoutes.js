const express = require('express');
const router = express.Router();
const productsController = require('../Controllers/productsController')

router.get('/detalle-producto', productsController.detalle);

router.get('/cart', productsController.cart);

router.get("/create", productsController.create);

router.get("/edit", productsController.edit);

router.get("/catalog", productsController.catalog);

router.get("/catalog-ebook", productsController.catalogebook);


module.exports = router;

