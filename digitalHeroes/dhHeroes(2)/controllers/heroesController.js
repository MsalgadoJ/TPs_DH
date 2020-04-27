const fs = require('fs');
var heroes = JSON.parse(fs.readFileSync('./data/heroes.json','utf-8'));

var heroesController = {
    main: function(req,res){
        res.send(heroes);
    },

    detalle: function(req,res){
        
        var heroeBuscado = heroes.find((nombre)=>{
            return nombre.id == req.params.id
        });

        if(heroeBuscado!=undefined){
            res.send("Hola, mi nombre es " + heroeBuscado.nombre + " y soy " + heroeBuscado.profesion);
        }else{
            res.send("Héroe no encontrado")
        };
    },

    resenia: function(req,res){
        var heroeBuscado = heroes.find((nombre)=>{
            return nombre.id == req.params.id
        });

        if(heroeBuscado == undefined){
            res.send("No encontramos un héroe para mostrarte su biografía");
        } else {
            if(heroeBuscado != undefined && req.params.ok == "ok"){
                res.send(heroeBuscado.resenia);
            }else{
                res.send("Lamento que no desees saber mas de mi :(")
            }
        };

    }
}

module.exports = heroesController;