var express = require('express');
var router = express.Router();
var moviesControllers = require('../controllers/moviesControllers');
let {check, validationResult, body } = require('express-validator')



/* --- CREAR UNA PELÍCULA --- */

router.get('/crear', moviesControllers.crear);

router.post('/crear',[
    //los nombres que se colocan en el express validator son los mismos que se colocaron en el formulario
    check('titulo').isLength().withMessage('este campo debe estar lleno'),
    check('premios').isNumeric().withMessage('los premios deben ser un número'),
    check('length').isInt({min: 100, max:180}).withMessage('la duración debe ser mayor a 100min'),
    check('rating').isNumeric().withMessage('el rating debe ser un número')
], moviesControllers.guardar);


/* --- MOSTRAR PELÍCULAS --- */
router.get('/', moviesControllers.list);

/* --- MOSTRAR DETALLE --- */
router.get('/detail/:id', moviesControllers.detail);

/* --- ACTUALIZAR --- */
router.get('/edit/:id',moviesControllers.edit);
router.post('/edit/:id', [
    //los nombres que se colocan en el express validator son los mismos que se colocaron en el formulario
    check('titulo').isLength().withMessage('este campo debe estar lleno'),
    check('premios').isNumeric().withMessage('los premios deben ser un número'),
    check('length').isInt({min: 100, max:180}).withMessage('la duración debe ser mayor a 100min'),
    check('rating').isNumeric().withMessage('el rating debe ser un número')
], moviesControllers.update);

/* --- BORRAR --- */
router.post('/delete/:id', moviesControllers.delete);


router.get('/new', moviesControllers.new);

router.get('/recommended', moviesControllers.recom);

router.get('/search', moviesControllers.search);

router.get('/results', moviesControllers.results)

module.exports = router;