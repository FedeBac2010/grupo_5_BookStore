module.exports = (sequelize, dataTypes) => {
    let alias = 'Format'; // esto debería estar en singular. Apodo de la tabla
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
        tablename: 'formats',
        timestamps: false,
    }


    const Format = sequelize.define(alias,cols,config);

    //relaciones con otros modelos
    Format.associate = function(models) {
        Format.belongsTo(models.Product, {
            as: 'products',
            // through: 'FALTA TABLA INTERMEDIA',// Tabla pivot
            foreignKey: 'format_id',
            // otherKey: 'product_id' //FALTA
        });

    }

    return Format
};