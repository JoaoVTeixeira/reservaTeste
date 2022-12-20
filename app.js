// Importa e instancia um servidor express
var express = require("express"), 
app = express();

// Define o template engine usado nas views
app.set("view engine", "ejs");
// Define a pasta onde irão ficar as views
app.set("views","./views");

// Define a pasta public para conteúdo estático
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});


app.listen(8080, function () {
    console.log("Servidor está no ar.");
});

