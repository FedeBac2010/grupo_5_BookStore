const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/usersController');

router.get('/login.ejs', (req, res) => {
    res.render('users/login');
});

router.get('/register.ejs',(req, res) => {
    res.render('users/register');
}); 
module.exports = router;