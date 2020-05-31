var express = require('express');
var router = express.Router();
var moviesControllers = require('../controllers/moviesControllers');



/* --- CREAR UNA PELÍCULA --- */

router.get('/crear', moviesControllers.crear);

router.post('/crear', moviesControllers.guardar);


/* --- MOSTRAR PELÍCULAS --- */
router.get('/', moviesControllers.list);

/* --- MOSTRAR DETALLE --- */
router.get('/detail/:id', moviesControllers.detail);

/* --- ACTUALIZAR --- */
router.get('/edit/:id',moviesControllers.edit);
router.post('/edit/:id',moviesControllers.update);

/* --- BORRAR --- */
router.post('/delete/:id', moviesControllers.delete);


router.get('/new', moviesControllers.new);

router.get('/recommended', moviesControllers.recom);

router.get('/search', moviesControllers.search);

router.get('/results', moviesControllers.results)

module.exports = router;