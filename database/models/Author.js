module.exports = (sequelize, dataTypes) => {
    let alias = 'Author'; // esto debería estar en singular. Apodo de la tabla
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
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = { //configuraciones
        tablename: 'authors',
        timestamps: false,
    }


    const Author = sequelize.define(alias,cols,config);

    //relaciones con los otros modelos
    Author.associate = function(models) {
        Author.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'author_id'
        });
    }

    return Author
};