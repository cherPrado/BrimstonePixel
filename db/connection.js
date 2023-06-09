const Sequelize = require('sequelize')

const sequelize = new Sequelize({ //criado objeto Sequelize com as configurações, que gerencia a conexão com o banco de dados
    dialect: 'sqlite',
    storage: './db/app.db'
})

module.exports = sequelize