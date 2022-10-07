const express = require('express');
const router = express.Router();

const javaController = require('../Controllers/javaController')

router.get('/JS', javaController.java)

module.exports = router;