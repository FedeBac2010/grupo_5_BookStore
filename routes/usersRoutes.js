const express = require('express');
const router = express.Router();
const usersController= require('../Controllers/usersController')

router.get('/login', usersController.login);

router.get('/register', usersController.register); 

router.get('/user', usersController.user); 

module.exports = router;