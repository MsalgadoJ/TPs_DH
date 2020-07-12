const db = require('../../database/models');
const sequelize = db.sequelize;

const moviesControllers = {

    list: function (req, res, next){
        db.Pelicula.findAll()
            .then(function(peliculas){
                /* 4. CONSTRUIMOS LA ESTRUCTURA DE LA API*/
                
                for(let i = 0; i<peliculas.length; i++ ){
                    peliculas[i].setDataValue('endpoint', '/api/movies/'+ peliculas[i].id)
                }
                
                let respuesta = {
                    meta: {
                        status: 200,
                        total: peliculas.length,
                        url: "/api/movies"
                    },

                    data: peliculas

                }
                
                res.send(respuesta)
                
            })
    },

    find: function(req,res,next){
        db.Pelicula.findByPk(req.params.id,{
            include: [{association: "genero"}, {association: "actores"}]
        })
            .then(function(pelicula){
                res.json(pelicula)
                
            })
    },

    store: function(req,res){
          db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.release_date,
            genre_id: req.body.genero,
            length: req.body.length,
            rating: req.body.rating
            
        });
        /* DEJAMOS HASTA ACÁ*/
             res.json({
                 status: 200
             });
        }


    
}

module.exports = moviesControllers;