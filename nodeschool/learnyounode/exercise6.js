var filterFn = require('./exercise5.js');

var dirName = process.argv[2];
var extName = process.argv[3];

filterFn(dirName, extName, function(err, list){
	if(err){
		throw err;
	}else{
		list.forEach(function(file){
			console.log(file);
		});
	}

});
