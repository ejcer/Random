var http = require('http');
var url = require('url');


var port = process.argv[2];




var server = http.createServer(function(req, res){
	


	if(url.parse(req.url, true).pathname === '/api/parsetime'){
		var isoTimeStr = url.parse(req.url, true).query.iso;
		var date = new Date(isoTimeStr);
		var jsonDate = {};
		jsonDate.hour = date.getHours();
		jsonDate.minute = date.getMinutes();
		jsonDate.second = date.getSeconds();
		var jsonDateString = JSON.stringify(jsonDate);

		res.writeHead(200, {'Content-Type': 'application/json'});
		
		res.write(jsonDateString, 'utf8');
		
		res.end();

	}else if(url.parse(req.url, true).pathname === '/api/unixtime'){
		var isoTimeStr = url.parse(req.url, true).query.iso;
		var date = new Date(isoTimeStr);
		var jsonDate = {};
		jsonDate.unixtime = date.getTime();
		var jsonDateString = JSON.stringify(jsonDate);

		res.writeHead(200, {'Content-Type': 'application/json'});

		res.write(jsonDateString, 'utf8');

		res.end();
	}else{
		res.writeHead(404);
		res.end();
	}



});

server.listen(port);
