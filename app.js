const express = require ('express')
const app = express ()
const path = require ('path')

const mainRoutes = require('./routes/mainRoutes')
const loginRoutes = require('./routes/loginRoutes')
const registerRoutes = require('./routes/registerRoutes')
const productoRoutes = require('./routes/productoRoutes')
const cartRoutes = require('./routes/cartRoutes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


app.use('/', mainRoutes);
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/detalle-producto', productoRoutes)
app.use('/cart', cartRoutes)


app.use(express.static(path.resolve(__dirname, ('./public'))))

app.get('/JS', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './JS/script.js'))
})

    app.listen(3000, ()=>{
        console.log ('linstening on http://localhost:3000')
    })