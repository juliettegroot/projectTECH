const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')
// define our port
const PORT = 3000
// setup the view engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// setup bodyparser to be able to see the data thats being sent from the client
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// define our static folder
app.use(express.static('static'))

app.get('/', function(req, res) {
    res.render('home')
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.post('/likeUser', function(req, res) {
    // req.body
    
})

app.listen(PORT, function() {
    console.log('App listening to port:', PORT)
})