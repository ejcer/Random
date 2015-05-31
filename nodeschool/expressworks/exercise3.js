var express = require('express');

var app = express();



app.set('view engine', 'jade');
var dirWithIndex = process.argv[3];
app.set('views', dirWithIndex);

app.get('/home', function(req, res){
	res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
