var express = require('express');
var router = express.Router();
var productsControllers = require('../controllers/productsControllers.js')

/* GET home page. */
router.get('/detail/:id/:category', productsControllers.index)

module.exports = router;