/* FUNCIONALIDAD EXPRESS */
const express = require ('express');
const app = express ();
const path = require ('path');

/* RUTAS */

const mainRoutes = require('./routes/mainRoutes');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');


/* CONFIG EJS */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* RUTAS */

app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

/* CONFIGURACION DE ARCHIVOS PUBLICOS */

app.use(express.static('public'))
/* app.use(express.static(path.resolve(__dirname, ('./public')))); */

/* ARCHIVO JS */

app.get('/JS', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './JS/script.js'))
});


/* SERVIDOR */
const PORT= process.env.PORT || 3000

app.listen(PORT, (req,res)=>{
    console.log('listening to port http://localhost:'+ PORT)
})