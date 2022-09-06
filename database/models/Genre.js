module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre'; // esto debería estar en singular. Apodo de la tabla
    let cols = { //Configuracion de columnas
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = { //configuraciones
        tablename: 'genres',
        timestamps: false,
    }


    const Genre = sequelize.define(alias,cols,config);

    //relaciones con otros modelos
    Genre.associate = function(models) {
        Genre.hasMany(models.Product, {
            as: 'genres',
            foreignKey: 'genre_id'
        });
    }

    return Genre
};