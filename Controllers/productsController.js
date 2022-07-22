const fs = require('fs');
const path = require('path');

/* CONFIG UUID  */
const {v4: uuidv4}= require('uuid');

const productListPath = path.resolve(__dirname, '../data/products.json'); //Solicitamos el JSON con la lista de productos
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));//Leemos el Json y lo traducimos a JS

module.exports = {
  catalog: (req, res) => {
    res.render("products/catalog", {books: productList, styles:'catalog.css'})
  },
  catalogebook: (req, res) => {
    res.render("products/catalog-ebook", {styles:'catalog-ebook.css'})
  },
  detalle: (req, res) => {
    let id=  req.params.id; //Toma el id que pasamos por URL
    let product = productList.find(product=> product.id == id); // Busca en la lista de productos aquellos que coincidan con el id pasado por URL
    res.render("products/detalle-producto",{books: product, styles:'detalle-producto.css'});
  },
  cart: (req, res) => {
    res.render("products/cart",{styles:'cart.css'});
  },
  create: (req, res) => { //AQUI ES DONDE CREAREMOS NUESTRO PRODUCTO
    res.render("products/create",{styles:'create.css'})
  },

  storeProduct:(req,res)=>{
    let product= req.body;
    product.id= uuidv4(); // le damos un id unico

    productList.push(product); //agregamos lo que viene por body a nuestra lista de productos

    fs.writeFileSync(productListPath, JSON.stringify(productList, null,2)); //Escribe lo que recibe en nuestro archivo JSON de productos 
                                                                  //null y 2 son para que aparezca ordenado en el archivo JSON

    res.redirect('/products/catalog') //Redirijimos al catalogo de productos
  },

  edit: (req, res) => {
    let id=  req.params.id; //Toma el id que pasamos por URL
    let product= productList.find(product=> product.id ==id); // Busca en la lista de productos aquellos que coincidan con el id pasado por URL
    res.render("products/edit",{books:product , styles:'edit.css'})
  },

  updateProduct:(req,res)=>{
    let id= req.params.id; //Toma el id que pasamos por URL
    let newProduct= req.body; //Lo que viene por body es nuestra info del producto actualizado

    newProduct.id=id // Con esto mantenemos el ID actual ya que sin esto se modifica pero borra el ID que tenia antes

    let productEdit= productList.find(product => product.id ==id) // Busca en la lista de productos aquellos que coincidan con el id pasado por URL

    productEdit= newProduct; //Nuestro producto viejo se convierte en el actualizado


    for(let i=0 ; i< productList.length; i++){
      const element= productList[i];
        if( element.id == id){
          productList[i] = newProduct;
        }
    } //En este ciclo for recorremos la lista de productos y  'element' representa cada elemento del array y aque que coincida con el id, ese elemento sera el nuevo producto actualizado 

    fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2)) //Escribe lo que recibe en nuestro archivo JSON de productos 

    res.redirect('/products/catalog') //Redirijimos al catalogo de productos
  },

  deleteProduct: (req, res) => {
      let id = req.params.id;
      for (let index = 0; index < productList.length; index++) {
          const element = productList[index];
          if (element.id == id) {
              productList.splice(index, 1);
          }
      }

      fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

      res.redirect('/products/catalog');}
  }

