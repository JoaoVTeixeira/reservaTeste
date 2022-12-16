// Importa e instancia um servidor express
var express = require("express"), 
       app = express();

var http = require('http');
var fs = require('fs');

// Configurações futuras



// Define a pasta onde irão ficar as views
app.set("views", __dirname + "/views");
// Define o template engine usado nas views
app.set("view engine", "ejs");

// Define a pasta public para conteúdo estático
app.use(express.static(__dirname + "/public"));

// Importa o módulo express-load
var express = require("express"),    
    load = require("express-load"),
    app = express();

// Carrega todas as scripts da pasta controller e routes
load("controllers")    
    .then("routes")
    .into(app);

    // Sobe o servidor HTTP na posta 3000
app.listen(3000, function () {
    console.log("Servidor está no ar.");
});

module.exports = function (app) {
        var home = app.controllers.home;
        app.get("/", home.index);
        app.post("/entrar", home.entrar);
            };


