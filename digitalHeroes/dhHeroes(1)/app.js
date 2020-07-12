// Require de Express
var express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
var app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json

var mainRouter = require('./routes/main');
var heroesRouter = require('./routes/heroes');


app.use('/', mainRouter);
app.use('/heroes', heroesRouter);

app.use(function(req, res, next){
    res.status(404);
    // respond with html page
    res.send('Houston, tenemos un problema');

  });
  