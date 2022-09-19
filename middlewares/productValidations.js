const path = require('path');
const { body, check } = require('express-validator');

const productsValidations = [
    check('title')
    .notEmpty().withMessage('Debe ingresar un nombre para el producto').bail()
    .isLength({min:3}).withMessage('El nombre es demsiado corto'),
    check('author')
    .notEmpty().withMessage('Debe ingresar un Autor').bail(),
    check('price')
    .notEmpty().withMessage('Debe ingresar un monto').bail()
    .isNumeric().withMessage('Debe ingresar un numero'),
    check('currency')
    .notEmpty().withMessage('Debe el tipo de moneda').bail(),
    check('description')
    .notEmpty().withMessage('Debe ingresar una descripción').bail(),

    body('image').custom((value, { req })=>{
		let file = req.file;
		let acceptedExtensions = ['.jpg','.png','.gif'];

		if (!file){
			throw new Error('Tienes que subir una imagen');
		}else{
			let fileExtension = path.extname(file.originalname);
			if(!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]

module.exports = productsValidations