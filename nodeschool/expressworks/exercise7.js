var express = require('express');
var app = express();

app.get('/search', function(req, res){
	var queryStrParam = req.query;
	
	res.send(JSON.stringify(queryStrParam));

});

app.listen(process.argv[2]);
