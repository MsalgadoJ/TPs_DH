module.exports = (sequelize, dataTypes) => {
    let alias = "Genero";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    const Genero = sequelize.define(alias,cols,config);

    //Hacemos las asociaciones con las otras tablas. En este caso: Movies
    Genero.associate = function(models){
        //aquí se coloca el alias que se le colocó en Movie.js
        Genero.hasMany(models.Pelicula,{
            as: "Peliculas",
            foreignKey: "genre_id"
        });
    }

    return Genero; 
}