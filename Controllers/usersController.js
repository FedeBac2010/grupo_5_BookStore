module.exports ={
    login: (req, res) => {
        res.render('users/login',{styles:'login.css'});
    },
    register: (req, res) =>{
        res.render("users/register",{styles:'register.css'});
    },
    user: (req, res) =>{
        res.render("users/user",{styles:'user.css'});
    },

}
