module.exports = (sequelize, dataTypes) => {
    let alias = "Actor";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        first_name:{
            type: dataTypes.STRING
        },

        last_name:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "actors",
        timestamps: false
    }

    const Actor = sequelize.define(alias,cols,config);

        //Hacemos las asociaciones con las otras tablas. En este caso: Movies
        Actor.associate = function(models){
            //aquí se coloca el alias que se le colocó en Movie.js
            Actor.belongsToMany(models.Pelicula,{
                as: "Peliculas",
                //se coloca a través de cuál tabla se hace la asociación
                through: "actor_movie",
                foreignKey: "actor_id",
                otherKey: "movie_id",
                timestamps: false
            });
        }

    return Actor; 

}