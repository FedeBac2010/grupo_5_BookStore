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
        res.render("contact",{styles:'styles.css'});
    },
    search: (req, res) => {
        
        db.Products.findAll({
            where: {
                title: {[Op.like]: "%" + req.query.search + "%"}
            }
        }).then(books => {
            let search = req.query.search
            res.render('products/result',{
                search,
                books:books,
            
                styles:'detalle-producto.css'
            })
        })
    }

    }
    