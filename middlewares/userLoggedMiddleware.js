const User = require('../models/User');

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

module.exports= userLoggedMiddleware;