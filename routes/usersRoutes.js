const express = require('express');
const router = express.Router();
const usersController= require('../Controllers/usersController');
const {body}= require('express-validator'); //requerimos express-validator

// CONFIG MULTER
const upload = require('../middlewares/multerAvatar');

//EXPRESS VALIDATOR

const validations= [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    
    body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    
    body('userEmail')
    .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),

    body('phoneNumber').notEmpty().withMessage('Tienes que escribir un numero telefonico').isMobilePhone(),

    body('city').notEmpty().withMessage('Tienes que escribir una ciudad'),
    
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),

    body('avatar').custom((value,{req})=>{
        let file = req.file;
        if (!file){
            throw new Error('Tienes que subir una imagen')
        }
        return true;
    }),
];

// RUTA DE REGISTRACION 

router.get('/register', usersController.register); 

// METODO QUE PROCESA EL REGISTRO

router.post('/register', upload.single('avatar'), validations ,usersController.processRegister); 

// RUTA QUE EDITA EL USUARIO

router.get("/edit/:id", usersController.edit);
router.put("/:id", usersController.updateUser)

// RUTA INICIO DE SESION

router.get('/login', usersController.login);

// RUTA DE  PERFIL DE USUARIO

router.get('/profile', usersController.profile);

// RUTA DE TODOS LOS USUARIOS

router.get('/all-profiles', usersController.AllProfiles); 

/* RUTA PARA ELIMINAR UN USUARIO */

router.delete('/:id', usersController.deleteProduct)

module.exports = router;