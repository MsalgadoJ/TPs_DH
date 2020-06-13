let {check, validationResult, body} = require('express-validator');

const usersControllers = {
    login: function (req, res,next){
        res.render('login', {
            title: 'Login'
        })
    },

    processLogin: function (req, res, next){
        let errors = validationResult(req);
        if(errors.isEmpty()){

        } else {
            res.render('login', {errors: errors.errors})
        }
    }

}

module.exports = usersControllers;