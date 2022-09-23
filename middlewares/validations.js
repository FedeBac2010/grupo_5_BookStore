const {body}= require('express-validator'); //requerimos express-validator

module.exports= validations= [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    
    body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    
    body('userEmail')
    .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),

    body('phoneNumber').notEmpty().withMessage('Tienes que escribir un numero telefonico').isMobilePhone().withMessage('Tienes que escribir solo numeros'),

    body('city').notEmpty().withMessage('Tienes que escribir una ciudad'),
    
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),

    body('avatar').custom((value,{req})=>{
        let file = req.file;
        if (!file ){
            throw new Error('Tienes que subir una imagen')
        }
        return true;
    }),
];