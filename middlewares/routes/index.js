var express = require('express');
var router = express.Router();
var mainControllers = require('../controllers/mainControllers');
var adminMiddleware = require('../middlewares/adminLogin')
let {check, validationResult, body}= require('express-validator')

/* GET MIDDLEWARES */
router.get('/', mainControllers.main);
router.get('/services', mainControllers.list);
router.get('/services/design', mainControllers.servicio);


/* RUTAS EXPRESS VALIDATOR */

router.get('/admin',adminMiddleware.check, mainControllers.adminLogin);


/*---PRUEBA SESSION---*/

router.get('/prueba1', function(req, res){
  var contador;
  if( req.session.contador == undefined){
    req.session.contador = 0;
  }
  contador = req.session.contador
  console.log(contador + 'pagina uno')
  res.render('prueba1',{
    contador: contador
  });
})


router.post('/prueba1', function(req, res){
    var contador = req.session.contador;
    console.log(contador + 'viajando por post')
    contador++
    console.log(contador + ' ya pasé pot el contador')
    res.render('prueba1',{
      contador:contador
    })
})

router.get('/prueba2', function(req, res){
  res.send('numero de visita: '+ req.session.numeroVisitas);
})

module.exports = router;
