const express = require('express');
const router = express.Router();
const {data} = require("../data/albums.json");
const {pop} = data;

console.log(pop[2].description);

router.get('/', (req, res) => {
    res.render('genres', data);
});

module.exports = router;
