var express = require('express');
var heroesController = require('../controllers/heroesController.js');
var router = express.Router();


/* GET heroes*/
router.get('/', heroesController.main);
router.get('/detalle/:id', heroesController.detalle);
router.get('/bio/:id/:ok?', heroesController.resenia);

module.exports = router;