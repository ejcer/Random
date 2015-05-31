var http = require('http');
var fs = require('fs');



var port = process.argv[2];
var fp = process.argv[3];



var server = http.createServer(function(req, res){
	// Called once for each connection received by server.
	
	fs.createReadStream(fp).pipe(res);
});

server.listen(port);
