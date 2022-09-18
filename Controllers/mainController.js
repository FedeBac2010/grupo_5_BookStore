module.exports = {
    home: (req, res)=>{
        res.render("home",{styles:'styles.css'});
    },
    contact: (req, res)=>{
        res.render("contact",{styles:'styles.css'});
    },
    }
    