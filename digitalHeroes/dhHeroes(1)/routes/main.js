var express = require ("express");
var router = express.Router();
var mainController = require("../controllers/mainController.js");

router.get('/', mainController.main);
router.get('/creditos', mainController.credit);
router.get('*', mainController.error);

module.exports = router;