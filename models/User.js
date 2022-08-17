//1. Guardar el usuario en la DB..
//2. Buscar al usuario que quiere logearse por email..
//3. Buscar a un usuario por su ID..
//4. Editar la info de un usuario.
//5. Elimiar a un usuario de la DB..

const fs= require('fs')

const User = {
    filename: './data/users.json',

    getData:function(){
        return JSON.parse(fs.readFileSync(this.filename,'utf-8')); //Leemos  y traducimos a un ARRAY el archivo JSON con todos los usuarios registrados citando a filename que esta dentro de nuestro objeto.
    },

    generateId: function(){
        let allUsers= this.findAll();
        let lastUser= allUsers.pop();
        if(lastUser){ //El if aclara en caso de que no haya usuarios en el JSON ejecute la accion , sino que devuelva 1
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll:function(){ //Mostramos la lista de usuarios.
        return this.getData();
    },

    findByPk:function(id){
        let allUsers= this.findAll(); //Obtenemos a traves de una variable local todos los usuarios
        let userFound= allUsers.find(oneUser => oneUser.id == id) // de todos los usuarios , me ubica el que cumpla con el id que pasamos.
        return userFound;
    },
    findByfield:function(field, text){ //Field: Usamos ese nombre ya que buscaremos por campo de informacion del usuario.
        let allUsers= this.findAll(); //Obtenemos a traves de una variable local todos los usuarios
        let userFound= allUsers.find(oneUser => oneUser[field] == text) // de todos los usuarios , me ubica el que cumpla con el id que pasamos.
        return userFound;
    },
    create:function(userData){
        let allUsers= this.findAll();
        let newUser={
            id:this.generateId(),
            ...userData //SPREAD OPERATOR: con los 3 puntos ejecutamos que nos devuelta toda la info que me llego del objeto literal userData
        }
        allUsers.push(newUser)
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, 2));
        return newUser
    },

    delete: function(id){
        let allUsers= this.findAll();
        let finalUsers= allUsers.filter(oneUser=> oneUser.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, 2));
        return true
    }
}

module.exports= User;