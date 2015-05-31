var express = require('express');
var bodyparser = require('body-parser'); // processes body of post req

var app = express();
app.use(bodyparser.urlencoded({extended: false}));



var strValue;

app.post('/form', function(req, res){
	console.log(req.body);
	res.end(req.body.str.split('').reverse().join(''));	

});













app.listen(process.argv[2]);
