var express = require('express')

var app = express()

app.get('/companys', function (req, res) {

    res.json(investottawa.json);
})

app.listen(3000)
