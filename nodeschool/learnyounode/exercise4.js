var fs = require('fs');

var fp = process.argv[2];

fs.readFile(fp, function(err, buf){
	if(err){
		throw err;
	}else{
		var lines = buf.toString().split('\n').length - 1;
		console.log(lines);
	}
});
