const fs = require('fs');
const bcrypt = require('bcrypt');

var usersControllers = {

        register: function(req, res){
            res.render('register');
        },

        create: function(req, res, next){

            // --- crear usuario
            let user = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                contrasenia: bcrypt.hashSync(req.body.password, 10),
                validacion: bcrypt.hashSync(req.body.validacion, 10),
                avatar: req.files[0].filename
            }

            //console.log(user); --- hasta acá, bien!!

            // --- guardar el usuario

            //leemos el archivo
            let usersFile = fs.readFileSync('users.json', {encoding: 'utf-8'});

            //definivimos la variable
            let users;
            //revisamos si el archivo está vacío
            if(usersFile == ""){
                users = [];
            } else {
                users = JSON.parse(usersFile);
            };
            
            
            users.push(user);
            //lo convertimos a JSON
            let usersJSON = JSON.stringify(users);
            
            //sobreescribimos el archivo
            fs.writeFileSync('users.json', usersJSON);

            // --- redireccionar

            res.redirect('/users/list')
        },

        list: function(req, res){
            res.render('list')
        },

        login: function(req, res){
            res.render('login')
        },

        processLogin: function(req, res){
            //leemos el archivo
            let usersFile = fs.readFileSync('users.json', {encoding: 'utf-8'});

            //definivimos la variable
            let users;
            //revisamos si el archivo está vacío
            if(usersFile == ""){
                users = [];
            } else {
                users = JSON.parse(usersFile);
            };
            
            console.log(users);

            for( var i = 0; i<users.length; i++){
                if (req.body.email == users[i].email){
                    res.send('te encontré!')
                }
            }

            res.send('error')
        }
};

module.exports = usersControllers;