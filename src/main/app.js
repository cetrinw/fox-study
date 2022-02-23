var express = require('express');
var wordController = require('./controller/word_controller')

var app = express();
app.get('/', function(req, res){
    wordController.getWords();
  });

  app.get('/save', function(req, res){
    wordController.save("a","一个","",1);
 });

app.listen(8181);
