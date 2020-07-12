const db = require('../database/models');
const sequelize = db.sequelize;
let {check, validationResult, body} = require('express-validator');

const moviesControllers = {

    // CREAR
    crear: function(req, res){
        db.Genero.findAll()
        .then(function(generos){
            return res.render('create', {
                generos:generos,
                title: 'Crear'
            });
        }); 
        
    },

    // GUARDAR
    guardar: function(req,res){

        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Pelicula.create({
                title: req.body.titulo,
                awards: req.body.premios,
                release_date: req.body.release_date,
                genre_id: req.body.genero,
                length: req.body.length,
                rating: req.body.rating
            })
        
            res.redirect('/movies');
       
        } else{
            db.Genero.findAll().then(function(generos){
                return res.render('create', {
                    generos:generos,
                    errors: errors.errors,
                    title: 'Crear'
                })
            })
        }    
    },

    // MOSTRAR LAS PELIS
    list: function (req, res, next){
        db.Pelicula.findAll()
            .then(function(peliculas){
                res.render('movies',{
                    peliculas:peliculas,
                    title: 'Películas'
                })
            })
    },

    // DETALLE
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

    // EDITAR
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

    // ACTUALIZAR
    update: function(req,res,next){
        
        let errors = validationResult(req);
        if(errors.isEmpty()){
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
        } else {
            let movieRequest = db.Pelicula.findByPk(req.params.id);

            let genresRequest = db.Genero.findAll();
    
            Promise.all([movieRequest, genresRequest])
    
            .then(function([pelicula, generos]){
                res.render('edit', {
                    pelicula: pelicula,
                    generos: generos,
                    errors: errors.errors,
                })
            })
        }

    },

    // BORRAR
    delete: function(req, res){
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies')
    },

    // NUEVAS
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

    // RECOMENDADAS
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

    // BUSCADOR
    search: function(req,res,next){
        res.render('search',{
            title: 'Búsqueda'
        })
    },

    // RESULTADOS DE BÚSQUEDA
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
    },

    // GENEROS
    genre: function(req,res,next){
        db.Genero.findByPk(req.params.id,{
            //Aquí utilizamos los nombres como los establecimos en las asociones hechas en el modelo
            include: [{association: "Peliculas"}]
        })
            .then(function(genero){
                res.render('genre', {
                    genero:genero,
                    title: 'Genero'
                })
            })
    },

    // ACTORES
    actor: function(req,res,next){
        db.Actor.findByPk(req.params.id,{
            //Aquí utilizamos los nombres como los establecimos en las asociones hechas en el modelo
            include: [{association: "Peliculas"}]
        })
            .then(function(actor){

                res.render('actor', {
                    actor:actor,
                    title: 'Actor'
                })
            })
    },

    // NUEVA ACTUACIÓN

    newAct: function(req, res, next){
        let allMovies = db.Pelicula.findAll();

        let allActors = db.Actor.findAll();
        console.log('AQUÍ ESTÁN LOS ACTORES')
        console.log(allActors)

        Promise.all([allMovies, allActors])
            .then(function([peliculas, actores]){
                res.render('newAct', {
                    peliculas: peliculas,
                    actores: actores
                })
            })
    }



}

module.exports = moviesControllers;