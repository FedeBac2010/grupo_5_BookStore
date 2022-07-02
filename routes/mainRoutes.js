const express = require('express');
const router = express.Router();
const mainController = require('../Controllers/mainController');

router.get('/', mainController.home);

module.exports = router;