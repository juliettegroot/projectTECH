const express = require('express');
const app = express();

app.get('/', onHome)
app.get('/about', onAbout)

app.get('*', notFound)

function onHome(req, res) {
    res.send('hello from home')
}

function onAbout(req, res) {
    res.send('hello from about')
}

function notFound(req, res) {
    res.send('Not found')
}

console.log('hallo')
