module.exports = (sequelize, dataTypes) => {
    let alias = 'Sale'; // esto debería estar en singular. Apodo de la tabla
    let cols = { //Configuracion de columnas
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        users_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        cart_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        date: {
            type: dataTypes.DATETIME,
            allowNull: false,
        },
        paymentMethod: {
            type: dataTypes.DECIMAL(10, 0),
            allowNull: false
        },
        totals: {
            type: dataTypes.DECIMAL(10, 0),
            allowNull: false
        }
    };

    let config = { //configuraciones
        tablename: 'sales',
        timestamps: false,
    }


    const Sale = sequelize.define(alias,cols,config);

    // //relaciones con otros modelos
    // Sale.associate = function(models) {


    // }

    return Sale
};