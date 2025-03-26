
const Sequelize = require('sequelize')

const connection = new Sequelize('tech', 'root', 'FeLipe8989',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection