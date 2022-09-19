const express = require('express');
const router = express.Router();
const productsController = require('../Controllers/productsController')

//EXPRESS VALIDATOR

const productsValidations= require('../middlewares/productValidations')

// CONFIG MULTER
const upload = require('../middlewares/multer');

/* RUTA A TODOS LOS PRODUCTOS */
router.get("/catalog", productsController.catalog);

router.get("/catalog-ebook", productsController.catalogebook);

/* RUTA DE DETALLE DE PRODUCTO POR ID */
router.get('/detalle-producto/:id', productsController.detalle);

/* RUTA DE CREACION DE PRODUCTO */
router.get("/create", productsController.create);
router.post("/create", upload.single('image'), productsValidations,productsController.storeProduct)

/* RUTA EDICION DE PRODUCTO */
router.get("/edit/:id", productsController.edit);
router.put("/:id", upload.single('image'), productsValidations,productsController.updateProduct)

/* RUTA PARA ELIMINAR UN PRODUCTO */
router.delete('/:id', productsController.deleteProduct)

/* RUTA A CARRITO DE PRODUCTOS */
router.get('/cart', productsController.cart);








module.exports = router;

