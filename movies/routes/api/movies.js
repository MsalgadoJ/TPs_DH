var express = require('express');
var router = express.Router();
var moviesAPIController = require('../../controllers/api/moviesController')

/* --- 3. CREAMOS EL ARCHIVO DE RUTAS,COMO SIEMPRE Y AHORA VAMOS A LISTAR LAS PELÍCULAS --- */
router.get('/', moviesAPIController.list);

router.post('/', moviesAPIController.store);

router.get('/:id', moviesAPIController.find)

module.exports = router;