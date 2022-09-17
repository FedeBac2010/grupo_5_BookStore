//Si se utilizara la base de datos JSON..

/* const User = require('../models/User');

function userLoggedMiddleware(req, res, next){
res.locals.isLogged =false;
//cookie usada para mantener la secion logeada cuando el usuario cierra el navegador
    let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByfield('userEmail', emailInCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
};

next();
}

module.exports= userLoggedMiddleware; */

//Con DATA BASE 

const db = require('../database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;


async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = await db.Users.findOne({
         where:{
            userEmail:{[Op.like]:emailInCookie}
        }})
        
    if(userFromCookie){
        req.session.userLogged = userFromCookie;    
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
    } 

    next();

}

module.exports = userLoggedMiddleware;