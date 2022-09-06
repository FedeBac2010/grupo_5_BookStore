module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular. Apodo de la tabla
    let cols = { //Configuracion de columnas
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        author_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        currency: {
            type: STRING(10),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 0),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT('medium'),
            allowNull: false
        },
        genre_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        image: {
            type: dataTypes.BLOB(MAX)
        },
        format_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    };

    let config = { //configuraciones
        tablename: 'products',
        timestamps: false,
    }


    const Product = sequelize.define(alias,cols,config);

    //relaciones con los otros modelos
    Product.associate = function(models) {
        Product.belongsTo(models.Author, {
            as: 'authors',
            foreignKey: 'author_id'
        });

        Product.belongsTo(models.Genre, {
            as: 'genres',
            foreignKey: 'genre_id'
        });

        Product.belongsToMany(models.Format, {
            as: 'formats',
            // through: NO TENEMOS TABLA INTERMEDIA// Tabla pivot
            foreignKey: 'product_id', // Columna de la tabla pivot
            otherKey: 'format_id' // Columna de la tabla pivot
        });

        
        Product.belongsToMany(models.Cart, {
            as: 'carts',
            through: 'carts_products',// Tabla pivot
            foreignKey: 'product_id', // Columna de la tabla pivot
            otherKey: 'cart_id' // Columna de la tabla pivot
        });

        Product.belongsToMany(models.User, {
            as: 'users',
            through: 'favourites',// Tabla pivot
            foreignKey: 'product_id', // Columna de la tabla pivot
            otherKey: 'user_id' // Columna de la tabla pivot
        });
        
    }

    return Product
};