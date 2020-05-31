var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers.js')
var multer = require('multer');
var path = require('path');
let {check, validationResult, body} = require('express-validator');
let credUserMiddlewares = require('../middlewares/credUserMiddlewares')

var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'public/images/avatars');
	},
	filename:(req,file,cb)=>{
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

var upload = multer({storage:storage});

/* --- REGISTER --- */

router.get('/register', credUserMiddlewares.guest, usersControllers.register);

router.post('/perfil', upload.any(), usersControllers.create);

/* --- LOGIN ---*/
router.get('/login', credUserMiddlewares.guest, usersControllers.login);

router.post('/perfil', [
	check('email').isEmail().withMessage('E-mail inválido'),
	check('password').isLength({min:6}).withMessage('La contrañseña debe tener mas de 6 caractéres')
  
  ], usersControllers.processLogin);

  /* --- RUTA DE PRUEBA PARA CHEQUEAR SESSION ---*/
router.get('/check', function(req, res){
	//console.
	if(req.session.userLogged == undefined){
		res.send('no estás logueado')
	} else {
		res.send('el usuario logueado es: '+ req.session.userLogged.email);
	}
})

router.get('/perfil', credUserMiddlewares.auth, usersControllers.perfil);


module.exports = router;
