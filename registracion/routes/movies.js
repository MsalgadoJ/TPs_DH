var express = require('express');
var router = express.Router();
var moviesControllers = require('../controllers/moviesControllers.js')

router.get('/', function(req, res){
    res.send('hola')
})

module.exports = router;