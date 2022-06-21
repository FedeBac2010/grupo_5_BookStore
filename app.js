const express = require ('express')
const app = express ()
const path = require ('path')


app.use(express.static(path.resolve(__dirname, ('./public'))))

app.get('/', (req, res)=>{
res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
    })

app.get('/js/script.js', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './JS/script.js'))
    })


app.listen(3000, ()=>{
    console.log ('linstening on http://localhost:3000')
})

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
    })