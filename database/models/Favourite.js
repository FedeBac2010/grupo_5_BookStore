// module.exports = (sequelize, dataTypes) => {
//     let alias = 'Favourite'; // esto debería estar en singular. Apodo de la tabla
//     let cols = { //Configuracion de columnas
//         id: {
//             type: dataTypes.INTEGER(11),
//             primaryKey: true,
//             allowNull: false,
//             autoIncrement: true
//         },
//         user_id: {
//             type: dataTypes.INTEGER(11),
//             allowNull: false,
//         },
//         products_id: {
//             type: dataTypes.INTEGER(11),
//             allowNull: false,
//         }
//     };

//     let config = { //configuraciones
//         tablename: 'favourites',
//         timestamps: false,
//     }


//     const Favourite = sequelize.define(alias,cols,config);

//     //relaciones con modelos
//     Favourite.associate = function(models) {

//     }

//     return Favourite
// };