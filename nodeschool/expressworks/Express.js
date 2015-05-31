var express = require('express');

var port = process.argv[2];


var app = express(); // 'app' is like 'server' from 'http's 'createServer()'

app.get('/home', function(req, res){
	// If a GET request occurs at '/home' then the callback is called.
	res.write('Hello World!', 'utf8');

	res.end();
});

app.listen(port);
