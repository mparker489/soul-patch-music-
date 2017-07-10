const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home-page');
});

app.get('/all-albums', (req, res) => {
    res.send("Welcome to all albums!");
});

app.listen(1234, () => {
    console.log('The application is running on localhost:1234!')
;});