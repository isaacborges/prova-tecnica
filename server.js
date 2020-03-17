//configure the server
const express = require("express")
const server = express()

//configure server to show static files
server.use(express.static('public'))

//configure body of form
server.use(express.urlencoded({extended: true}))

//configure the template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})

//configure the page presentation
server.get("/", function(req, res){
    return res.render("index.html")
})

//get data from the forms
server.post("/", function(req, res){
    const name = req.body.name
    const telefone = req.body.telefone
    const conheceu = [req.body.conheceu]

    return res.redirect("/")
})

//allow access in the port 8080
server.listen(8080, function(){
    console.log("Server iniciado")
})