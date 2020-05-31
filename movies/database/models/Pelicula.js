module.exports = (sequelize, dataTypes) => {
    let alias = "Pelicula";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title:{
            type: dataTypes.STRING
        },

        rating: {
            type: dataTypes.DOUBLE
        },

        awards: {
            type: dataTypes.INTEGER
        },

        length: {
            type: dataTypes.INTEGER
        },

        release_date: {
            type: dataTypes.DATE
        },

        genre_id: {
            type: dataTypes.INTEGER
        }

    }

    let config = {
        tableName: "movies",
        timestamps: false
    }

    const Pelicula = sequelize.define(alias,cols,config);

    //Hacemos las asociaciones con las otras tablas. En este caso: Movies
    Pelicula.associate = function(models){
    //aquí se coloca el alias que se le colocó en Movie.js
        Pelicula.belongsTo(models.Genero,{
            as: "genero",
            foreignKey: "genre_id"
        });

        Pelicula.belongsToMany(models.Actor,{
            as: "actores",
            //se coloca a través de cuál tabla se hace la asociación
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }

    return Pelicula; 
}