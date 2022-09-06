// module.exports = (sequelize, dataTypes) => {
//     let alias = 'Cart_product'; // esto debería estar en singular. Apodo de la tabla
//     let cols = { //Configuracion de columnas
//         id: {
//             type: dataTypes.INTEGER(11),
//             primaryKey: true,
//             allowNull: false,
//             autoIncrement: true
//         },
//         cart_id: {
//             type: dataTypes.INTEGER(11),
//             allowNull: false
//         },
//         product_id: {
//             type: dataTypes.INTEGER(11),
//             allowNull: false,
//         }
//     };

//     let config = { //configuraciones
//         tablename: 'carts_products',
//         timestamps: false,
//     }


//     const Cart_product = sequelize.define(alias,cols,config);

//     //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
//     Cart_product.associate = function(models) {

//     }

//     return Cart_product
// };