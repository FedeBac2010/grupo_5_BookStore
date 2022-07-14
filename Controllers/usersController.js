module.exports ={
    login: (req, res) => {
        res.render('users/login',{styles:'login.css'});
    },
    register: (req, res) =>{
        res.render("users/register",{styles:'register.css'});
    },

}
