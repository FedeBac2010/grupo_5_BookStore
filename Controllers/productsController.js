module.exports = {
  detalle: (req, res) => {
    res.render("products/detalle-producto");
  },
  cart: (req, res) => {
    res.render("products/cart");
  },
  edit: (req, res) => {
    res.render("products/edit")
  },
  create: (req, res) => {
    res.render("products/create")
  }
};

