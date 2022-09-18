const fs = require("fs");
const path = require("path");

//SEQUELIZE
const db = require ('../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");

/* EXPRESS-VALIDATOR */
const {validationResult} = require('express-validator')

/* CONFIG UUID  */
const { v4: uuidv4 } = require("uuid");

/* CONFIG USUARIOS */

const usersListPath = path.resolve(__dirname, "../data/users.json"); //Solicitamos el JSON con la lista de usuarios
const usersList = JSON.parse(fs.readFileSync(usersListPath, "utf8")); //Leemos el Json y lo traducimos a JS

/* const userModel = require('../models/User'); */ // Importamos archivo userModel

const bcrypt = require('bcrypt');
const User = require("../models/User");

module.exports = {
  
  register: async (req, res) => {

    let user= await db.Users.findAll()

    res.render("users/register", { styles: "register.css" });
  },
  processRegister: async (req, res) => {

/* PROCESO DE CREACION y VALIDACION */

    const resultValidation = validationResult(req);

    let usuarioRepetido = await db.Users.findOne({
        where: {
            userEmail: { [Op.like]: req.body.userEmail }
        }
    })
    
    if (!resultValidation.errors.length && !usuarioRepetido){

      db.Users.create({
          fullName: req.body.fullName,
          userName: req.body.userName,
          password: bcrypt.hashSync(req.body.password, 12),
          userEmail: req.body.userEmail,
          phoneNumber: req.body.phoneNumber,
          city: req.body.city,
          avatar: req.file.filename
}).then(function(user) {
  req.session.userLogged = user;
  res.redirect('/users/login');
})
} else {
if (usuarioRepetido) {
  return res.render('users/register', {
    styles: "register.css",
      errors: {
          userEmail: {
              msg: 'Este email ya está registrado'
          }
      },
      oldData: req.body
})} else {
  
  return res.render('users/register', {
      styles: "register.css",
      errors: resultValidation.mapped(),
      oldData: req.body
  });
}
}
},
  
//Proceso de creacion -- cuando se usaba JSON --

    /* VALIDACIONES */
/*     const resultValidation= validationResult(req); //va entregar la data sobre los datos que valido
    
    if(resultValidation.errors.length >0){
      return res.render("users/register",{
        styles: "register.css",
        errors:resultValidation.mapped(),
        oldData:req.body
      })
    } */

    /* let currentUser = req.body; //Lo que viene por registro
    let listUsers = User.getData(); //OBTENEMOS LOS USUARIOS
    

	let userToCreate = {
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 10), //Encriptamos la contraseña
    avatar: req.file.filename //para subir la imagen
  }

  let userInDB= User.findByfield('userEmail', req.body.userEmail) //La variable almacena al usuario de acuerdo al campo (userEmail) que ya se encuentra registrado en la basde datos JSON

  if (userInDB){
    return res.render("users/register",{
      styles: "register.css",
      errors:{
        userEmail:{
          msg: 'Este email ya esta registrado'
        }
      },
      oldData:req.body
    })
  }


  let userCreated = User.create(userToCreate); */

  edit: (req, res) => {

    let user= db.Users.findByPk(req.params.id);

    res.render("users/edit-user", { users: req.session.userLogged, styles: "edit.css" });
    
    //CON --JSON--
   /*  let id = req.params.id; //Toma el id que pasamos por URL
    let user = usersList.find((user) => user.id == id); // Busca en la lista de usuarios aquellos que coincidan con el id pasado por URL
    res.render("users/edit-user", { users: user, styles: "edit.css" }); */

  },

  updateUser: (req, res) => {
    const resultValidation = validationResult(req);

    if(!resultValidation.errors.length){
    
      db.Users.findByPk(req.session.userLogged.id)
    .then(function(user){
      user.update({
      fullName: req.body.fullName,
      userName: req.body.userName,
      password: bcrypt.hashSync(req.body.password, 12),
      userEmail: req.body.userEmail,
      phoneNumber: req.body.phoneNumber,
      city: req.body.city,
      avatar: req.file.filename,
    }).then(user=>{
      req.session.userLogged = user;
      res.redirect("/users/all-profiles");
    }).catch(function(e){
      res.render('users/edit-user', {
        styles: "edit.css",
        errors: resultValidation.mapped(),
        oldData: req.body
    });
  });
  })
    
    /* {
      where:{
        id:req.params.id
      }
    } */


     //Redirijimos a la lista de usuarios
    
    
    //CUANDO USABAMOS --JSON--
    
    /* let id = req.params.id; //Toma el id que pasamos por URL
    let newUser = req.body; //Lo que viene por body es nuestra info del usuario actualizado

    newUser.id = id; // Con esto mantenemos el ID actual ya que sin esto se modifica pero borra el ID que tenia antes

    let userEdit = usersList.find((user) => user.id == id); // Busca en la lista de usuarios aquellos que coincidan con el id pasado por URL

    userEdit = newUser; //Los datos de del usuario viejo se convierte en el actualizado

    for (let i = 0; i < usersList.length; i++) {
      const element = usersList[i];
      if (element.id == id) {
        usersList[i] = newUser;
      }
    } //En este ciclo for recorremos la lista de productos y  'element' representa cada elemento del array y aque que coincida con el id, ese elemento sera el nuevo Usuario actualizado

    fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2)); //Escribe lo que recibe en nuestro archivo JSON de productos
 */
  }else{
    return res.render('users/edit-user', {
      styles: "edit.css",
      errors: resultValidation.mapped(),
      oldData: req.body
  });
  }},

  deleteProduct: async(req, res) => {
    
    let user= await db.Users.findByPk(req.params.id)

    await user.destroy();


    res.redirect('/users/all-profiles');
/*     let id = req.params.id;
    for (let index = 0; index < usersList.length; index++) {
        const element = usersList[index];
        if (element.id == id) {
          usersList.splice(index, 1);
        }
    }

    fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2)); */

    
  },

  login: async (req, res) => {
    res.render("users/login", { styles: "login.css" });
  },

  loginProcess: async (req,res)=>{

    let userToLogin = await db.Users.findOne({
      where:{
        userEmail: { [Op.like]: req.body.userEmail },//Corrobora que el userEmail se encuentre dentro de la DB
        /* password: { [Op.like]: req.body.password } *///Corrobora que la password se encuentre dentro de la DB
      }
    });

    if(userToLogin){
        let okPassword = (bcrypt.compareSync(req.body.password,userToLogin.password ))
      

      if(okPassword){
        delete userToLogin.password; //Utilizado para que no se vea la contraseña durante la sesion
        req.session.userLogged = userToLogin; //Se almacena la info del userToLogin
  

          if(req.body.remember_user) {
					res.cookie('userEmail', req.body.userEmail, { maxAge: (1000 * 60* 5)})
				}
        //cookie para mantener usuario logeado por milesimas de segundos en este caso existe por 2 minutos

        return res.redirect('/users/profile')
      }else{
      return res.render("users/login", {
        styles: "login.css",
        errors:{
          userEmail:{
            msg: 'El Email ingresado es correcto',
          },
          password:{
            msg: 'Las contraseña no es correcta'
          }
        },
        oldData: req.body
      })
        }
    }else{
    return res.render("users/login", {
      styles: "login.css",
      errors:{
        userEmail:{
          msg: 'Debe colocar un Email de usuario valido para ingresar'
        }
      }
    })
  }

  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect("/");
  },

  AllProfiles:  async (req, res) => {
    let users= await db.Users.findAll()
    res.render("users/all-users", { users: users, styles: "all-users.css" });
  },
  
  profile: async (req, res) => {
    let user= await db.Users.findByPk(req.params.id);
    
    res.render("users/user", {user:user,styles: "user.css",user: req.session.userLogged});
  },



};
