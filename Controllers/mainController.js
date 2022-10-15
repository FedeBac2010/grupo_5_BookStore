const path = require('path');
const fs = require('fs');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    home: (req, res)=>{
        res.render("home",{styles:'styles.css'});
    },
    contact: (req, res)=>{
        res.render("contact",{styles:'contact.css'});
    },
    search: (req, res) => {
        let category = db.Category.findAll();
        
         db.Products.findAll({
            include:[{association:"categories"}],
            where: {
                title: {[Op.like]: "%" + req.query.search + "%"},
                

             
            }
        }).then(books => {
            let search = req.query.search
            if(search === "" || books.title === {[Op.ne]: req.query.search}){
                res.render('error-404',{styles:'styles.css'})
            }else{

            res.render('products/result',{
                search,
                books:books,
                category:category,
            
                styles:'result.css'
            })}
        })
    }

    }
    