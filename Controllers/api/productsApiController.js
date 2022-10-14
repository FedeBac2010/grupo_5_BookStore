const db = require('../../database/models');
const sequelize = db.sequelize;

const productsApiController = {
    list:(req,res)=>{
        db.Category.findAll({
            include:['products']
        })
        .then(categories => {

        db.Products.findAll({
        include:['categories']
    })
        .then(products=>{
            let arrayCategorias = []
            for(let i=0; i<categories.length ; i++){
                arrayCategorias.push({
                    nombre: categories[i].dataValues.name, 
                    total: categories[i].dataValues.products.length
                })
            }

            let ebooks = products.filter(product => products.length/* product.category_id == 1 */)
            let fisicos = products.filter(product => products.length/* product.category_id == 2 */)
          
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "/api/products",
                    categories: categories.length,
                    categoryNames: arrayCategorias,
                    countByCategory: [
                        {ebooks: ebooks.length},
                        /* {fisicos: ebooks.length}, */
                    ]
                },
                data: products.map(product => {
                    return{
                        id: product.id,
                        title: product.title,
                        author: product.author,
                        description: product.description,
                        image: "/img/uploads/" + product.image,
                        price: product.price,
                        currency: product.currency,
                        categories: {name:product.categories.name}, 
 
                    }
                })
            }
        
            res.json(respuesta)
        })    
        })
        .catch(function(error){
            res.json({status:800})
        })
    },

    detail:(req,res)=>{
            db.Category.findAll({
                include:['products']
            })
            .then(categories => {
        
        db.Products.findByPk(req.params.id, 
            {
                include:['categories']
        })
        .then(product=>{
            let respuesta = {
                meta:{
                    status: 200,
                    url: "/api/products/:id" /* + product.id */
                },
                data: product
                
                /* {
                    id: product.id,
                    title: product.title,
                    author: product.author,
                    description: product.description,
                    image: "/img/uploads/" + product.image,
                    price: product.price,
                    currency: product.currency,
                    categories: {name:product.categories.name}, 
                   
                    } */
                }
            
            res.json(respuesta)
        })
    })
        
        .catch(function(error){
            res.json({status:800})
        })
        
    },

    lastProduct: (req, res) => {
        db.Products.findAll({order:[["id", "DESC"]], limit:1})
        .then(function (product) {
            product[0].setDataValue("endpoint", "/api/products/lastProduct/" + product.length)

            let apiResponse= {
                meta: {
                    status : 200,
                    url:"/api/products/lastProduct",
                    total: product.length
                },
                data: product
            }
            res.json(apiResponse)
        })
        .catch(function(error){
            res.json({status:500})
        })
    }

}

module.exports = productsApiController;