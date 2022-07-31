const fs = require("fs");
const path = require("path");

/* CONFIG UUID  */
const { v4: uuidv4 } = require("uuid");

const usersListPath = path.resolve(__dirname, "../data/users.json"); //Solicitamos el JSON con la lista de usuarios
const usersList = JSON.parse(fs.readFileSync(usersListPath, "utf8")); //Leemos el Json y lo traducimos a JS

module.exports = {
  register: (req, res) => {
    res.render("users/register", { styles: "register.css" });
  },
  processRegister: (req, res) => {
    let user = req.body;
    user.id = uuidv4();

    usersList.push(user);

    fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2));

    res.redirect("/users/all-profiles"); //Redirijimos a la lista de usuarios;
  },

  edit: (req, res) => {
    let id = req.params.id; //Toma el id que pasamos por URL
    let user = usersList.find((user) => user.id == id); // Busca en la lista de usuarios aquellos que coincidan con el id pasado por URL
    res.render("users/edit-user", { users: user, styles: "edit.css" });

  },

  updateUser: (req, res) => {
    let id = req.params.id; //Toma el id que pasamos por URL
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

    res.redirect("/users/all-profiles"); //Redirijimos a la lista de usuarios
  },

  deleteProduct: (req, res) => {
    let id = req.params.id;
    for (let index = 0; index < usersList.length; index++) {
        const element = usersList[index];
        if (element.id == id) {
          usersList.splice(index, 1);
        }
    }

    fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2));

    res.redirect('/users/all-profiles');
  },

  login: (req, res) => {
    res.render("users/login", { styles: "login.css" });
  },
  profile: (req, res) => {
    res.render("users/user", { styles: "catalog.css" });
  },

  AllProfiles: (req, res) => {
    res.render("users/all-users", { users: usersList, styles: "user.css" });
  },
};
