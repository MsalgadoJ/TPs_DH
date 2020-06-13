var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers');
let {check, validationResult, body} = require('express-validator');

/* PRACTICANDO SESSION */


router.get('/login', usersControllers.login);

router.post('/login',[
  check('email').isEmail().withMessage('E-mail inválido'),
  check('password').isLength({min:6}).withMessage('La contrañseña debe tener mas de 6 caractéres')

] ,usersControllers.processLogin);

module.exports = router;
