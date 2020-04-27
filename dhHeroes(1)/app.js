// Require de Express
var express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
var app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', function(req, res){
	res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.");
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', function(req,res){
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/detalle/:id', function(req,res){
        
	var heroeBuscado = heroes.find((nombre)=>{
		return nombre.id == req.params.id
	});

	if(heroeBuscado!=undefined){
		res.send("Hola, mi nombre es " + heroeBuscado.nombre + " y soy " + heroeBuscado.profesion);
	}else{
		res.send("Héroe no encontrado")
	};
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/bio/:id/:ok?', function(req,res){
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
});

// Ruta Créditos
app.get('/creditos', function(req, res){
	res.send("linda práctica dominguera");
});

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});