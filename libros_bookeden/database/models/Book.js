module.exports = (sequelize, dataTypes) => {
    let alias = "Book";
    let cols = {
        title:{
            type: dataTypes.STRING
        },

        author: {
            type: dataTypes.STRING
        },

        price: {
            type: dataTypes.FLOAT
        },

        description: {
            type: dataTypes.STRING
        },

        release_date: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: "books",
        timestamps: false
    }

    const Book = sequelize.define(alias,cols,config);


    Book.associate = function(models){
        Book.belongsTo(models.Genre,{
            as: "genre",
            foreignKey: "genre_id"
        });

    }

    return Book; 
}