const fs = require('fs');
const path = require('path');

const userLogstxt = path.join(__dirname, '../logs/userLogs.txt');

const userLogsMiddleware = {
    userLogs: function (req, res, next){
        console.log('estoy en el middleware');
        fs.appendFileSync(userLogstxt, 'El usuario ingresó a la ruta: '+ req.url + ". ")
        next();
    }
}

module.exports = userLogsMiddleware;