module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart'; // esto debería estar en singular. Apodo de la tabla
    let cols = { //Configuracion de columnas
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        carts_products_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        quantity: {
            type: dataTypes.MEDIUMINT(9),
            allowNull: false,
        },
        total: {
            type: dataTypes.DECIMAL(10, 0),
            allowNull: false,
        }
    };

    let config = { //configuraciones
        tablename: 'carts',
        timestamps: false,
    }


    const Cart = sequelize.define(alias,cols,config);

    //relaciones con otros modelos.
    Cart.associate = function(models) {
        Cart.hasMany(models.Sale, {
            as: 'sales',
            foreignKey: 'cart_id'
        });
        Cart.belongsToMany(models.Product, {
            as: 'products',
            through: 'carts_products',// Tabla pivot
            foreignKey: 'cart_id', // Columna de la tabla pivot
            otherKey: 'product_id' // Columna de la tabla pivot
        });

    }
    
    return Cart
}