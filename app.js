var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<p>Portal de notícias</p>");
});

app.get('/tecnologia', function(req, res){
    res.send("<p>Portal de notícias de tecnologia</p>");
});

app.listen(3000, function(){
    console.log("servidor rodando com express");
});