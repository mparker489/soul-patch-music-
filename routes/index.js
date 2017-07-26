const express = require('express');
const router = express.Router();
const data = require("../data/albums.json");

router.get('/', (req, res) => {
  var all = [];
  Object.keys(data.data).forEach(function(key){
      all = all.concat(data.data[key].albums);
  })
    res.render('home-page', {data:all});
});

module.exports = router;
