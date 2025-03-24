const express = require("express");
const app = express();
const connection = require("./database/database");
const Cliente = require("./database/Cliente")

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

connection
  .authenticate()
  .then(() => {
    console.log("Conexão bem feita com o banco de dados");
  })
  .catch((msgErro) => {
    console.log("Erro ao conectar ao banco de dados:", msgErro);
  });


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sobre", (req, res) => {
  res.render("aboutUs");
});

app.get("/atendimento", (req,res) => {
    res.render("service")
})


app.get("/contato?", (req,res) => {
    res.send("oi")
})



app.listen(8181, (erro) => {
    if(erro){
        console.log("Erro no servidor")
    }
    else{
        console.log("Servidor rodando na porta 8181")
    }
})