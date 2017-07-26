const express = require('express');
const router = express.Router();
const data = require("../data/albums.json");

router.get('/', (req, res) => {
  var newReleases = [];
  Object.keys(data.data).forEach(function(key){
    if(data.data[key].albums.newRelease == true)
      newReleases = newReleases.concat(data.data[key].albums);
  })
    res.render('home-page', {data:newReleases});
});

module.exports = router;
