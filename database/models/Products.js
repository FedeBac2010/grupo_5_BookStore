module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: dataTypes.STRING(100),
    description: dataTypes.TEXT,
    image: dataTypes.BLOB,
    price: dataTypes.MEDIUMINT,
    currency: dataTypes.STRING(100),
    category_id: dataTypes.INTEGER,
    author: dataTypes.STRING(100),
  };
  let options = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, options);

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      as: "categories",
      foreignKey: "category_id",
    });
  };

  return Product;
};
