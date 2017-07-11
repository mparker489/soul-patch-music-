const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

//routes
app.get('/', (req, res) => {
    res.render('home-page');
});

app.get('/genres', (req, res) => {
    res.render('genre-page');
});

app.get('/albums', (req, res) => {
    res.render('album-body');
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status=404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(1234, () => {
    console.log('The application is running on localhost:1234!')
;});