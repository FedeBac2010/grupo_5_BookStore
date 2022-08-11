const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userListPath = path.resolve(__dirname, '../data/users.json');

const User = {
    getAll: () => {
        const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));
        return userList;
    },
    create: (user) => {
        let newUser = {
            // fullName: user.fullName,
            // userName: user.userName,
            // userEmail: user.userEmail,
            // phoneNumber: user.phoneNumber,
            // city: user.city,
            ...user,
            password: bcrypt.hashSync(user.password, 10),
            id: uuid.v4(),//genera automaticamenete un id
        
        };

        let userList = User.getAll();

        userList.push(newUser);

        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));
    return newUser
    },
    validateUser: (viewUser) => {
        let userList = User.getAll();
        let currentUser = userList.find(user => {
            if (
                user.userEmail == viewUser.userEmail && 
                bcrypt.compareSync(viewUser.password, user.password)) {
                return user;
            }
        });

        if (currentUser) {
            return currentUser;
        }

        throw new Error('Usuario no encontrado');
    }
}

module.exports = User;