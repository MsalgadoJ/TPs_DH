// 1-REQUERIMOS DB
let db = require('../database/models');
// 2- Llamamos a la variable sequelize que es la que realmente utilizaremos
//let sequelize = db.sequelize;


var moviesControllers = {
    list: function (req, res){
        db.Peliculas.findAll()
            .then(function(peliculas){
                res.render('listadoDePeliculas',{
                    peliculas:peliculas
                })
            })
    },

    detail: function (req, res){
        db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
                res.render('detallePelicula', {
                    pelicula:pelicula
                })
            })
    }
}

module.exports = moviesControllers;