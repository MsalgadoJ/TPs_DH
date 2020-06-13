const mainControllers = {
    main: function(req,res,next){
        res.render('index',{
            title: 'home'
        })
    },

    list: function(req, res, next){
        res.send('estos son los servicios')
    },

    servicio: function(req,res,next){
        res.send('aquí diseñamos')
    },

    adminLogin: function (req,res,next){
        res.send('bienvenido admin: ' + req.query.user);
    }

    
}

module.exports = mainControllers;