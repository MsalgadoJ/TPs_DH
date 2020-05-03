var express = require('express');
var router = express.Router();
var indexControllers = require('../controllers/indexControllers.js')

/* GET home page. */
router.get('/', indexControllers.main)

module.exports = router;


/*function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/