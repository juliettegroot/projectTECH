const express = require('express');
const app = express();
const port = 3000

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
    res.send('404 Not Found')
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

console.log('hallo')
