const { request } = require('express');
const express = require('express');
const router = express.Router();
const usersController= require('../Controllers/usersController');

const guestMiddleware= require('../middlewares/guestMiddleware');
const authMiddleware= require('../middlewares/authMiddleware');

// CONFIG MULTER
const upload = require('../middlewares/multerAvatar');

//EXPRESS VALIDATOR

const validations= require('../middlewares/validations')

// RUTA DE REGISTRACION 

router.get('/register', guestMiddleware,usersController.register); 

// METODO QUE PROCESA EL REGISTRO

router.post('/register', upload.single('avatar'), [validations] ,usersController.processRegister); 

// RUTA QUE EDITA EL USUARIO

router.get("/edit/:id", usersController.edit);
router.put("/:id", upload.single('avatar'),validations ,usersController.updateUser)

// RUTA DE LOGIN

router.get('/login',guestMiddleware, usersController.login);

// METODO QUE PROCESA EL LOGIN

router.post('/login', usersController.loginProcess);

// RUTA DE  PERFIL DE USUARIO

router.get('/profile',authMiddleware, usersController.profile);

// RUTA DE TODOS LOS USUARIOS

router.get('/all-profiles', usersController.AllProfiles); 

/* RUTA PARA ELIMINAR UN USUARIO */

router.delete('/:id', usersController.deleteProduct)

// RUTA DE  LOGOUT

router.get('/logout', usersController.logout);


module.exports = router;

