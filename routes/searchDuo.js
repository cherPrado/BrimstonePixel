const express = require('express')
const router = express.Router()
const path = require('path')
const BuscaDuo = require('../models/BuscaDuo')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', (req, res) => {

    let search = req.query.inputBusca
    let query = '%'+search+'%'

    if(!search){
        BuscaDuo.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(busca => {
            res.render(path.join(__dirname, '../views/layouts/searchDuo'), {busca})
        }).catch(err => console.log(err))
    }else {
        BuscaDuo.findAll({
            where: {description: {[Op.like]: query}},
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(busca => {
            res.render(path.join(__dirname, '../views/layouts/searchDuo'), {busca, search})
            
        }).catch(err => console.log(err))
    }
})

router.get('/registeringSearch', (req, res) => {
    res.render(path.join(__dirname, '../views/layouts/registeringSearch'))
})

router.post('/add', (req, res) => {

    let numRand = Math.floor(Math.random() * 20);

    let {elo, name, nick, discord, email, title, description} = req.body

    console.log("deu certo")

    BuscaDuo.create({
        elo,
        name,
        nick,
        discord,
        email,
        title,
        description,
        numRand,
    })
    .then(() => res.redirect('/searchDuo'))
    .catch(err => console.log(err))
}) 
 


module.exports = router