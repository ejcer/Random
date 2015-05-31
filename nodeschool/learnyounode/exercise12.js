var http = require('http');
var thruMap = require('through2-map');


var port = process.argv[2];

var server = http.createServer(function(req, res){
	req.pipe(thruMap(function(word){
		return word.toString().toUpperCase();
	})).pipe(res);

});

server.listen(port);
