const express    = require('express')
const exphbs     = require('express-handlebars')
const app        = express()
const path       = require('path')
const port       = 3000
const db         = require('./db/connection')
const bodyParser = require('body-parser')

app.listen(port, () => console.log("Rodando na porta 3000"))

//body parser
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views/layouts/index'))
})

//db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso")
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err)
    })

    
//routes
app.use('/maps', require('./routes/maps'))
app.use('/searchDuo', require('./routes/searchDuo'))