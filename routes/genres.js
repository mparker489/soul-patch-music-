const express = require('express');
const router = express.Router();
const {data} = require("../data/albums.json");
const {pop} = data;
const{rap} = data;

var genre = new Array();

for(var i = 0; i < data.length; i++)
{
    // genre[i] = new Array();
    genre.push(data[i]._id);
}

// var albums = new Array();
// for(var x = 0; x < genre[)

// console.log(genre);

router.get('/', (req, res) => {
    res.render('genres', {pop});
});

module.exports = router;
