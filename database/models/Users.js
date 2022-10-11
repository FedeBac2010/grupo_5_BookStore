module.exports = (sequelize, dataTypes) =>{
    let alias = 'Users';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: dataTypes.STRING(100),
        userName: dataTypes.STRING(100),
        password: dataTypes.STRING(100),
        // repeatPassword: dataTypes.STRING(100),
        userEmail: dataTypes.STRING(100),
        phoneNumber: dataTypes.STRING(100),
        city: dataTypes.STRING(100),
        avatar: dataTypes.STRING(200),
        rol: dataTypes.STRING(20)
        // isAdmin: dataTypes.BOOLEAN
    };
    let options = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias,cols,options);
    return User;

}
