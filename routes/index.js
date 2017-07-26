const express = require('express');
const router = express.Router();
const data = require("../data/albums.json");
const popular = data;
const releases = data;
const staff = data;

router.get('/', (req, res) => {
  var newReleases = [];
  Object.keys(releases.data).forEach(function(key){
    for (var i = 0; i < releases.data[key].albums.length; i++)
      {
        if(releases.data[key].albums[i].newRelease===true)
          newReleases = newReleases.concat(releases.data[key].albums[i]);
      }
  })

  var mostPop = [];
  Object.keys(popular.data).forEach(function(key){
    for (var i = 0; i < popular.data[key].albums.length; i++)
      {
        if(popular.data[key].albums[i].mostPopular===true)
          mostPop = mostPop.concat(popular.data[key].albums[i]);
      }
  })

  var staffPickzz = [];
  Object.keys(staff.data).forEach(function(key){
    for (var i = 0; i < staff.data[key].albums.length; i++)
      {
        if(staff.data[key].albums[i].staffPicks===true)
          staffPickzz = staffPickzz.concat(staff.data[key].albums[i]);
      }
  })
  res.render('home-page', {releases:newReleases, popular:mostPop, staff:staffPickzz});
});

module.exports = router;
