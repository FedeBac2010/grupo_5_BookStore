/* FUNCIONALIDAD EXPRESS */
const express = require ('express');
const app = express ();
const path = require ('path');

/* METHOD OVERRIDE */
const methodOverride= require('method-override');

/*SESSION*/
const session = require('express-session');

/* RUTAS */

const mainRoutes = require('./routes/mainRoutes');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');

/* MIDDLEWARES */
const userLoggedMiddleware= require("./middlewares/userLoggedMiddleware");

/* COOKIES */
const cookies = require('cookie-parser');
/* CONFIG EJS */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* CONFIG CRUD */

app.use(express.urlencoded({extended:true}));  //CAPTURAMOS LA INFORMACION DE LOS FORMULARIOS
app.use(express.json());

app.use(methodOverride('_method')); //utilizamos para usar PUT y DELETE

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
})); //Utilizamos para session

app.use(cookies());

app.use(userLoggedMiddleware);


/* RUTAS */

app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);



/* CONFIGURACION DE ARCHIVOS PUBLICOS */

app.use(express.static('public'))


/* ARCHIVO JS */

app.get('/JS', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './JS/script.js'))
});


/* SERVIDOR */
const PORT= process.env.PORT || 3000

app.listen(PORT, (req,res)=>{
    console.log('listening to port http://localhost:'+ PORT)
})