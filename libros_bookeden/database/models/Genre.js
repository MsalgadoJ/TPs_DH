module.exports = (sequelize, dataTypes) => {
    let alias = "Genre";
    let cols = {
        name:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    const Genre = sequelize.define(alias,cols,config);

    Genre.associate = function(models){
        Genre.hasMany(models.Book,{
            as: "Books",
            foreignKey: "genre_id"
        });
    }

    return Genre
}

   