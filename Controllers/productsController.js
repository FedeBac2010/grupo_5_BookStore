const fs = require('fs');
const path = require('path');

const productListPath = path.resolve(__dirname, '../data/products.json');
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));

module.exports = {
  detalle: (req, res) => {
    res.render("products/detalle-producto",{styles:'detalle-producto.css'});
  },
  cart: (req, res) => {
    res.render("products/cart",{styles:'cart.css'});
  },
  edit: (req, res) => {
    res.render("products/edit",{styles:'edit.css'})
  },
  create: (req, res) => {
    res.render("products/create",{styles:'create.css'})
  },
  catalog: (req, res) => {
    res.render("products/catalog", {books: productList, styles:'catalog.css'})
  },
  catalogebook: (req, res) => {
    res.render("products/catalog-ebook", {styles:'catalog-ebook.css'})
  }
};

