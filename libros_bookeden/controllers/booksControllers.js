const db = require('../database/models');
const sequelize = db.sequelize;

var booksControllers = {
    create: function(req, res,next){
        db.Genre.findAll()
        .then(function(genres){
            return res.render('create', {
                genres:genres,
                title: 'Crear'
            });
        });  
    },

    safe: function(req,res,next){
        db.Book.create({
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            genre_id: req.body.genre,
            description: req.body.description,
            release_date: req.body.release_date
        })

        res.redirect('/books');
    },

    list: function(req,res,next){
        db.Book.findAll()
        .then(function(books){
            res.render('books',{
                books:books,
                title: 'Libros'
            })
        })
    },

    detail: function(req,res,next){
        db.Book.findByPk(req.params.id,{
            include:[{association: "genre"}]
        })
            .then(function(book){
                res.render('detail', {
                    book:book,
                    title: 'Detalle'
                })
            })
    },

    edit: function(req,res,next){
        let bookRequested = db.Book.findByPk(req.params.id)
        let genresRequested = db.Genre.findAll()
        Promise.all([bookRequested, genresRequested])
            .then(function([book, genres]){
                res.render('edit', {
                    book:book,
                    genres: genres,
                    title: 'Editar'
                })
            })
    },

    update: function(req,res,next){
        db.Book.update({
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            genre_id: req.body.genre,
            description: req.body.description,
            release_date: req.body.release_date
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/books/detail/'+req.params.id);
    },

    
    delete: function(req,res,next){
        db.Book.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/books')
    }

}

module.exports = booksControllers;
