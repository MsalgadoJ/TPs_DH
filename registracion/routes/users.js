var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers.js')
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'public/images/avatars');
	},
	filename:(req,file,cb)=>{
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

var upload = multer({storage:storage});

/* GET users listing. */
router.get('/register', usersControllers.register);

router.post('/register', upload.any(), usersControllers.create);

/* --- LOGIN ---*/
router.get('/login', usersControllers.login);

router.post('login', usersControllers.processLogin);

router.get('/list', usersControllers.list);


module.exports = router;
