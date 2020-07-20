const fs = require('fs');
const bcrypt = require('bcrypt');
let {check, validationResult, body} = require('express-validator');

var usersControllers = {

        register: function(req, res){

            if(typeof req.cookies.bgColor != 'undefined'){
                res.render('register',{
                    color: req.cookies.bgColor
                });
            } else {
                res.render('register',{
                    color: undefined
                })
            }
            
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
            console.log("Aquí está el usuario!!!")
            console.log(user)

            // --- guardar el usuario --- //

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

            for( let i = 0; i< users.length; i++){
                if(user.email == users[i].email){
                    res.send('ya se ha registrado un usuario con este email')
                    break;
                }
            } 
            
            
            users.push(user);
            //lo convertimos a JSON
            let usersJSON = JSON.stringify(users);
            
            //sobreescribimos el archivo
            fs.writeFileSync('users.json', usersJSON);

            // --- redireccionar

            req.session.userLogged = user;
            console.log(req.session.userLogged)

            res.render('perfil',{
                nombre: req.session.userLogged.nombre,
                email: req.session.userLogged.email,
                avatar: req.session.userLogged.avatar
            });

        },

        login: function (req, res,next){
            res.render('login', {
                title: 'Login'
            })
        },

        processLogin: function(req, res){
            // Creamos la variable errores
            let errors = validationResult(req);
            
            //Verificamos si hay errores
            if(errors.isEmpty()){
                //si no hay errores
                let usersFile = fs.readFileSync('users.json', {encoding: 'utf-8'});
                //definivimos la variable
                let users;
                //revisamos si el archivo está vacío
                if(usersFile == ""){
                    users = [];
                } else {
                    users = JSON.parse(usersFile);
                };
                
                //verificamos e-mail y contraseña
               let userToLogin
               console.log(req.body);
                for(var i = 0; i<users.length; i++){
                    if(req.body.email == users[i].email){
                        if(bcrypt.compareSync(req.body.password, users[i].contrasenia)){
                            userToLogin = users[i];
                            //console.log(userToLogin);
                            break;
                        }
                    }
                }

               // En caso de que el usuario esté indefinido hacemos nuestro propio mensaje de error
                if(userToLogin == undefined){
                    res.render('login', {
                        title:'login',
                        errors: [
                        {msg: 'credenciales inválidas'}
                    ]});
                }

                //aplicamos session acá con el usuario encontrado
                //para que se puede "mantener vivo" la ejecución debería terminar en algún lado
                req.session.userLogged = userToLogin;

                //creando la cookie para la casilla "recuérdame"
                if(req.body.rememberMe != undefined){
                    res.cookie('rememberMe', userToLogin.email, {maxAge: 240000})
                }
                console.log(req.session.userLogged)
                res.render('perfil',{
                    nombre: req.session.userLogged.nombre,
                    email: req.session.userLogged.email,
                    avatar: req.session.userLogged.avatar
                });

            } else {
                res.render('login', {
                    errors: errors.errors,
                    title: 'login'
                })
            }

        },

        perfil: function (req, res, next){
            res.render('perfil',{
                nombre: req.session.userLogged.nombre,
                avatar: req.session.userLogged.avatar
            })
        },

        mostrarColores: function(req, res, next){
            res.render('color')
        },

        colorElegido: function(req, res, next){
            let color = req.body.color
            console.log(color)
            res.cookie('bgColor', color)
            console.log('aquí debería estar la cookie')
            console.log(req.cookies.bgColor)
            if(req.body.colorPreferido != undefined){
                res.cookie('colorPreferido', color)
            }

            console.log(req.cookies.colorPreferido+ ' aquí esta la coookieeeeeeee') 
            res.render('nuevoColor', {
                color: color,
            })
        }
};

module.exports = usersControllers;