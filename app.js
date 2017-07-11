const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

//routes

const mainRoutes = require('./routes');
const albumRoutes = require('./routes/album');
const genreRoutes = require('./routes/genres');

app.use(mainRoutes);
app.use('/album', albumRoutes);
app.use('/genres', genreRoutes);

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
