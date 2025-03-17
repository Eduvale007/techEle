const express = require("express")
const app = express()

app.use(express.static('public'))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/sobre?", (req,res) => {
        res.send("oi")
})



app.get("/atendimento?", (req,res) => {
    res.send("oi")
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