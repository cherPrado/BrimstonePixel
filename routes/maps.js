const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../views/layouts/maps'))
})

router.get('/1', (req, res) => {
 
    res.render(path.join(__dirname, `../views/layouts/1`))
})


router.get('/:id', (req, res) => {
    const id = req.params.id

    res.render(path.join(__dirname, `../views/layouts/${id}`))
})

module.exports = router