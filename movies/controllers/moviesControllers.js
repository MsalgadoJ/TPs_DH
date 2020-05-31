const db = require('../database/models');
const sequelize = db.sequelize;

const moviesControllers = {

    crear: function(req, res){
        db.Genero.findAll()
        .then(function(generos){
            return res.render('create', {
                generos:generos
            });
        });  
    },

    guardar: function(req,res){
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.release_date,
            genre_id: req.body.genero,
            length: req.body.length,
            rating: req.body.rating
        })

        res.redirect('/movies');
    },

    list: function (req, res, next){
        db.Pelicula.findAll()
            .then(function(peliculas){
                res.render('movies',{
                    peliculas:peliculas,
                    title: 'Películas'
                })
            })
    },

    detail: function(req,res,next){
        db.Pelicula.findByPk(req.params.id,{
            //Aquí utilizamos los nombres como los establecimos en las asociones hechas en el modelo
            include: [{association: "genero"}, {association: "actores"}]
        })
            .then(function(pelicula){
                res.render('detail', {
                    pelicula:pelicula,
                    title: 'Detalle'
                })
            })
    },

    edit: function(req,res,next){
        let movieRequest = db.Pelicula.findByPk(req.params.id);

        let genresRequest = db.Genero.findAll();

        Promise.all([movieRequest, genresRequest])

        .then(function([pelicula, generos]){
            res.render('edit', {
                pelicula: pelicula,
                generos: generos
            })
        })
    },

    update: function(req,res,next){
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.release_date,
            genre_id: req.body.genero,
            length: req.body.length,
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/movies/detail/'+req.params.id);
    },

    delete: function(req, res){
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies')
    },

    new: function(req,res,next){
        db.Pelicula.findAll({
            order: [
                ["release_date", "DESC"]
            ],
            limit: 5
        })
        .then(function(peliculas){
            res.render('new',{
                peliculas:peliculas,
                title: 'Novedades'
            })
        })
    },

    recom: function(req,res,next){
        db.Pelicula.findAll({
            where: {
                rating: {[db.Sequelize.Op.gt] : 8}
            },

            order: [
                ["rating", "DESC"]
            ]
        })
        .then(function(peliculas){
            res.render('recommended',{
                peliculas:peliculas,
                title: 'Recomendados'
            })
        }) 
    },

    search: function(req,res,next){
        res.render('search',{
            title: 'Búsqueda'
        })
    },

    results: function(req,res,next){
        let userSearch = req.query.search
        db.Pelicula.findAll({
            where: {
                title: {[db.Sequelize.Op.substring]: userSearch}
            },

            order: [
                ["title", "DESC"]
            ]
        })
        .then(function(peliculas){
            res.render('results',{
                peliculas:peliculas,
                title: 'Resultados'
            })
        }) 
    }
}

module.exports = moviesControllers;