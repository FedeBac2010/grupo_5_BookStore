module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; // esto debería estar en singular. Apodo de la tabla
    let cols = { //Configuracion de columnas
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        fullName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        userName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        userEmail: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        phoneNumber: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        city: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.BLOB,
            allowNull: false
        },
        rol: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    };

    let config = { //configuraciones
        tablename: 'users',
        timestamps: false,
    }


    const User = sequelize.define(alias,cols,config);

    //relaciones con otros modelos
    User.associate = function(models) {
        User.belongsTo(models.Cart, {
            as: 'carts',
            foreignKey: 'user_id'
        });
        User.belongsToMany(models.Sale, {
            as: 'sale',
            foreignKey: 'user_id'
        });
    }

    return Genre
};