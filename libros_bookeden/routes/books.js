var express = require('express');
var router = express.Router();
var booksControllers = require('../controllers/booksControllers');

/* --- CREAR UN LIBRO --- */
router.get('/create', booksControllers.create);
router.post('/create', booksControllers.safe);

/* --- LEER LIBROS ---*/
router.get('/', booksControllers.list);

/* --- DETALLE DEL LIBRO --- */
router.get('/detail/:id', booksControllers.detail);

/* --- EDITAR --- */
router.get('/edit/:id', booksControllers.edit);
router.post('/edit/:id', booksControllers.update);

/* --- BORRAR --- */

router.post('/delete/:id', booksControllers.delete);

module.exports = router;
