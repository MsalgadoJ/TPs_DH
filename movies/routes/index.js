var express = require('express');
var router = express.Router();
let gifResource = require('../requests/gifResource');

/* GET home page. */
router.get('/', function(req, res, next) {

  gifResource.random().then(function(results){
    console.log(results)
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
