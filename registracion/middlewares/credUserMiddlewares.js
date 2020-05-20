    // Luego de aplicar el session en el Login podemos verificar si el usuario está logueado y darle acceso (o no), a alguna página en particular.

const credUserMiddlewares = {

    // damos acceso si NO está logueado
    guest: function(req, res, next){
        if(req.session.userLogged == undefined){
            next();
        } else {
            res.send('esta página es solo para invitados');
        }
    },

    //damos acceso SI está logueado
    auth: function(req, res, next){
        if(req.session.userLogged != undefined){
            next();
        } else {
            res.send('esta página es solo para usuarios');
        }
    }

}

module.exports = credUserMiddlewares;