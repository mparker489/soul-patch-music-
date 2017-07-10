const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hell yes i did it!");
});

app.listen(1234);