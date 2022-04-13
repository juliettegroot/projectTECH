require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')
const bcrypt = require('bcrypt');



// DATABASE OPZETTEN
const mongoose = require('mongoose')
const dbKey = process.env.MONGO_URI

mongoose.connect(dbKey,{useNewURLParser:true})
.then(() => console.log('Database is connected'))
.catch(err=>console.log(err))

app.use(express.urlencoded({extended:false}))

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

app.get('/inlog', function(req, res) {
    res.render('inlog')
})

app.get('/register', function(req, res) {
    res.render('register')
})

// app.post('/likeUser', function(req, res) {
//     // req.body
    
// })

app.listen(PORT, function() {
    console.log(`Server running at http://localhost:3000`);
})