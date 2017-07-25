const express = require('express');
const router = express.Router();
const {data} = require("../data/albums.json");
const {pop} = data;
const{rap} = data;

var genre = [];
for(var i = 0; i < data.length; i++){
    genre.push(data[i]._id)
}

router.get('/', (req, res) => {
    res.render('genres', {rap});

});

module.exports = router;
