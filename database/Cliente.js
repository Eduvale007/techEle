
/*
const Sequelize = require('sequelize')
const connection = require('./database')

const Cliente = connection.define('Cliente', {
    nomeCliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    emailCliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefoneCliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dispositivo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      // Usando JSON para armazenar o array de serviços
      servicos: {
        type: Sequelize.JSON,
        allowNull: true // Pode ser NULL, caso não tenha serviços
      }
})

Cliente.sync({force: false}).then(() =>{
    console.log("Tabela criada")
})

module.exports = Cliente*/
