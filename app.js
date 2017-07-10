const express = require('express');

const app = express();

app.set('');

app.get('/', (req, res) => {
    res.send("Hell yes i did it!");
});

app.get('/all-albums', (req, res) => {
    res.send("Welcome to all albums!");
});

app.listen(1234, () => {
    console.log('The application is running on localhost:1234!')
;});