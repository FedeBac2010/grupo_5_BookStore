const javaController = {
    java: (req, res)=>{
    res.sendFile(path.resolve(__dirname, './JS/script.js'))
}
    
}
        
        module.exports = javaController