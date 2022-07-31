const express = require('express');
const router = express.Router();
const usersController= require('../Controllers/usersController');
const {body}= require('express-validator');



// RUTA DE REGISTRACION 

router.get('/register', usersController.register); 

// METODO QUE PROCESA EL REGISTRO

router.post('/register', usersController.processRegister); 

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