const express = require('express');
const router = express.Router();
const { engine } = require('express-handlebars');
const app = express();

const config = require('../controlles/config');

//koppelen handlebars en views
app.use(express.static(__dirname + "../static"));
app.use(express.urlencoded({ extended: false }));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//register en login koppelen met handlebars
router.get('/login', (req, res, next) => res.render('login'));
router.get('/register', (req, res, next) => res.render('register'));

//info ophalen uit config.js
router.post('/register', config.register);
router.post('/login', config.login);


module.exports = router;