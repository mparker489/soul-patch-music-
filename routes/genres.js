const express = require('express');
const router = express.Router();
const data = require("../data/albums.json");

router.get('/', (req, res) => {
    const genre = req.query.genre || "";
    if(genre != "" && data && data.data && data.data[genre]){
        res.render('genres', {data:data.data[genre].albums, genreTitle: data.data[genre].genreName});
    }
    else if(genre != ""){
        res.render('not-found');
    }
    else{
        var all = [];
        Object.keys(data.data).forEach(function(key){
            all = all.concat(data.data[key].albums);
        })
        res.render('genres', {data:all, genreTitle: "All Albums"});
    }
});

module.exports = router;
