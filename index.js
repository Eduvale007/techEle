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

app.post("/atendimento", async (req, res) => {
  try {
      const { nomeCliente, emailCliente, telefoneCliente, dispositivo, servicos, descricao } = req.body;

      console.log("Nome:", nomeCliente);
      console.log("Email:", emailCliente);
      console.log("Telefone:", telefoneCliente);
      console.log("Dispositivo:", dispositivo);
      console.log("Serviços:", servicos);
      console.log("Descrição:", descricao);

      // Criando o registro no banco de dados com Sequelize
      const novoCliente = await Cliente.create({
          nomeCliente,
          emailCliente,
          telefoneCliente,
          dispositivo,
          servicos,
          descricao
      });

      return res.status(201).json({ message: "Atendimento registrado com sucesso!", data: novoCliente });

  } catch (error) {
      console.error("Erro ao registrar atendimento:", error);
      return res.status(500).json({ message: "Erro interno no servidor", error: error.message });
  }
});


app.get("/contato", (req, res) => {
  res.send("oi");
});


const PORT = 8181;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
