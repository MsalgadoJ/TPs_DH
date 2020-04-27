var express = require('express');
var mainController = require('../controllers/mainController.js');
var router = express.Router();


/* GET home page. */
router.get('/', mainController.home);
router.get('/creditos', mainController.credit);

module.exports = router;
