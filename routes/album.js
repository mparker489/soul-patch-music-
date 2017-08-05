const express = require('express');
const router = express.Router();
const data = require("../data/albums.json");

router.get('/', (req, res) => {
    const album = req.query.album || "";
    var track = "";
    Object.keys(data.data).forEach(function (key) {
        for (var i = 0; i < data.data[key].albums.length; i++) {
            if (album == data.data[key].albums[i].id) {
                track = data.data[key].albums[i];
            }
        }
    })
    if(track != ""){
        res.render('album', track);
    }
    else{
        res.render('not-found');
    }
});

module.exports = router;
