const fs = require('fs');
const path = require('path');

//SEQUELIZE
const db = require ('../database/models')
const sequelize = db.sequelize;

//VALIDACION
const { validationResult } = require('express-validator');

/* CONFIG UUID  */
const {v4: uuidv4}= require('uuid');

const productListPath = path.resolve(__dirname, '../data/products.json'); //Solicitamos el JSON con la lista de productos
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));//Leemos el Json y lo traducimos a JS

module.exports = {
  catalog:async (req, res) => {
    let category = await db.Category.findAll();
    let books = await db.Products.findAll({
      include:[{association:"categories"}]
    });
       
    res.render("products/catalog", {books: books, category:category, styles:'catalog.css'})

  },
  catalogebook: (req, res) => {
    res.render("products/catalog-ebook", {styles:'catalog-ebook.css'})
  },
  detalle: async function (req, res) {

      let category = await db.Category.findAll();

      let books = await db.Products.findByPk(req.params.id,{
        include:[{association:"categories"}]
      })

      res.render('products/detalle-producto', {books:books, category: category, styles:'detalle-producto.css'});


 

    // db.Products.findByPk(req.params.id)
    //     .then(books => {
    //         res.render('products/detalle-producto', {books:books, category: category, styles:'detalle-producto.css'})
    //     }).catch(function (e) {
    //         res.render('error')// si no  encuentra el ususario  
    //     })
    
  },
  cart: (req, res) => {
    res.render("products/cart",{styles:'cart.css'});
  },
  create: async function (req, res) { //AQUI ES DONDE CREAREMOS NUESTRO PRODUCTO
    
    
      let category = await db.Category.findAll();
      


      res.render('products/create',{category:category, styles:'create.css'});
   
    },

  storeProduct: async function (req,res) {

    const resultProductsValidation = validationResult(req);
    let category = await db.Category.findAll();
    
    if(!resultProductsValidation.errors.length){
          db.Products.create({
              title: req.body.title,
              description: req.body.description,
              image: req.file.filename,
              price: req.body.price,
              currency: req.body.currency,
              category_id: req.body.category_id,
              author: req.body.author,
          })
              res.redirect('/products/catalog');
              console.log(req.file);
            }else {
              
              return res.render('products/create', {
                  category:category,
                  styles:'create.css',
                  errors: resultProductsValidation.mapped(),
                  oldData: req.body,
              });
          }
          },

  edit: async function (req, res) {
    let category = await db.Category.findAll();
    /* let books = await db.Products.findAll(); */

    let product = await db.Products.findByPk(req.params.id) 

/*     Promise.all([category,product])
    .then(function([category,product]){
      res.render("products/edit",{books:product,category:category, styles:'edit.css'})
    }) */

    res.render("products/edit",{books:product,category:category, styles:'edit.css'})


    
  },

  updateProduct:async function(req,res) {

    const resultProductsValidation = validationResult(req);

    if(!resultProductsValidation.errors.length){

    await db.Products.update({
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename,
            price: req.body.price,
            currency: req.body.currency,
            category_id: req.body.category_id,
            author: req.body.author,
            },
                {
                    where: {
                        id: req.params.id
                    }
                  })
                  
                    res.redirect('/products/catalog');
                  }else {
                    let product = await db.Products.findByPk(req.params.id);
                    let category = await db.Category.findAll();
                    return res.render('products/edit', {
                        styles:'edit.css',
                        errors: resultProductsValidation.mapped(),
                        books:product,
                        category:category,
                        oldData: req.body,
                    });
                }
                  
              
              
          },
 
  deleteProduct: async function (req,res){

      let product = await db.Products.findByPk(req.params.id)

      await product.destroy()

      res.redirect('/products/catalog')
  }
}

// catalog: (req, res) => {
//   res.render("products/catalog", {books: productList, styles:'catalog.css'})
// },
// catalogebook: (req, res) => {
//   res.render("products/catalog-ebook", {styles:'catalog-ebook.css'})
// },
// detalle: (req, res) => {
//   let id=  req.params.id; //Toma el id que pasamos por URL
//   let product = productList.find(product=> product.id == id); // Busca en la lista de productos aquellos que coincidan con el id pasado por URL
//   res.render("products/detalle-producto",{books: product, styles:'detalle-producto.css'});
// },
// cart: (req, res) => {
//   res.render("products/cart",{styles:'cart.css'});
// },
// create: (req, res) => { //AQUI ES DONDE CREAREMOS NUESTRO PRODUCTO
//   res.render("products/create",{styles:'create.css'})
// },

// storeProduct:(req,res)=>{
//   let product= req.body;
//   let image = req.file;
//   let images = req.files;
//   product.id= uuidv4(); // le damos un id unico

//   //condicion en caso de subir una imagen o varias. Recorrer todos los archivos y guardarlo en propiedad
//   if (image) {
//     product.image = image.filename;
// } else if (images) {
//     product.image = images.map(image => image.filename);
// }
  
//   productList.push(product); //agregamos lo que viene por body a nuestra lista de productos

//   fs.writeFileSync(productListPath, JSON.stringify(productList, null,2)); //Escribe lo que recibe en nuestro archivo JSON de productos 
//                                                                 //null y 2 son para que aparezca ordenado en el archivo JSON

//   res.redirect('/products/catalog') //Redirijimos al catalogo de productos
// },

// edit: (req, res) => {
//   let id=  req.params.id; //Toma el id que pasamos por URL
//   let product= productList.find(product=> product.id ==id); // Busca en la lista de productos aquellos que coincidan con el id pasado por URL
//   res.render("products/edit",{books:product , styles:'edit.css'})
// },

// updateProduct:(req,res)=>{
//   let id= req.params.id; //Toma el id que pasamos por URL
//   let newProduct= req.body; //Lo que viene por body es nuestra info del producto actualizado

//   newProduct.id=id // Con esto mantenemos el ID actual ya que sin esto se modifica pero borra el ID que tenia antes

//   //Aplique el mismo procedimiento que cuando cargamos el producto al actualizar la imagen
//   let image = req.file;
//   let images = req.files;
//   if (image) {
//     newProduct.image = image.filename;
//     productList.push(product.image);
// } else if (images) {
//     newProduct.image = images.map(image => image.filename);
// }

//   let productEdit= productList.find(product => product.id ==id) // Busca en la lista de productos aquellos que coincidan con el id pasado por URL

//   productEdit= newProduct; //Nuestro producto viejo se convierte en el actualizado


//   for(let i=0 ; i< productList.length; i++){
//     const element= productList[i];
//       if( element.id == id){
//         productList[i] = newProduct;
//       }
//   } //En este ciclo for recorremos la lista de productos y  'element' representa cada elemento del array y aque que coincida con el id, ese elemento sera el nuevo producto actualizado 

//   fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2)) //Escribe lo que recibe en nuestro archivo JSON de productos 

//   res.redirect('/products/catalog') //Redirijimos al catalogo de productos
// },

// deleteProduct: (req, res) => {
//     let id = req.params.id;
//     for (let index = 0; index < productList.length; index++) {
//         const element = productList[index];
//         if (element.id == id) {
//             productList.splice(index, 1);
//         }
//     }

//     fs.writeFileSync(productListPath, JSON.stringify(productList, null, 2));

//     res.redirect('/products/catalog');}
// }
