const express = require('express');
const router = express.Router();
const usersController= require('../Controllers/usersController')

// RUTA DE USUARIO

router.get('/user', usersController.user); 

// RUTA INICIO DE SESION

router.get('/login', usersController.login);

// RUTA DE REGISTRACION 

router.get('/register', usersController.register); 


module.exports = router;