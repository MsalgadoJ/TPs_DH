const fs = require('fs');
const path = require('path');

const userLogstxt = path.join(__dirname, '../logs/userLogs.txt');

const adminMiddleware = {
    check: function (req, res, next) {
        // Chequeo que el usuario sea el correcto
        let user = req.query.user;
        if (user == "Ada" || user == "Greta" || user == "Vim" || user == "Tim") {
            // Continuamos
            next();
        } else {
            res.send("No tienes los privilegios para ingresar");
        }
    }
}

module.exports = adminMiddleware;