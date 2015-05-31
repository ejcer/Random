var bufList = require('bl');
var concatStream = require('concat-stream');
var http = require('http');





var url = process.argv[2];
http.get(url, function(res){
	res.pipe(bufList(function(err, data){
		if(err)
			throw err;
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});
