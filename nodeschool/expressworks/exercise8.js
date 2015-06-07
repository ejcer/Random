var express = require('express');
var fs = require('fs');


var app = express();

var port = process.argv[2];

var fp = process.argv[3];


app.get('/books', function(req, res){
	fs.readFile(fp, function(err, data){
		if(err)
			throw err;
		var jsonData = JSON.parse(data);
		res.json(jsonData);
	});
});

app.listen(port);

