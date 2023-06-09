const Sequelize = require('sequelize')
const db = require('../db/connection')

const BuscaDuo = db.define('buscaduos', {
    elo:{
        type: Sequelize.STRING,
    },
    name:{
        type: Sequelize.STRING,
    },
    nick:{
        type: Sequelize.STRING,
    },
    discord:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    title:{
        type: Sequelize.STRING,
    },
    description:{
        type: Sequelize.STRING,
    },
    numRand:{
        type: Sequelize.STRING,
    },
})
 
module.exports = BuscaDuo 