var fs = require('fs');
var path = require('path');

module.exports = function (dirName, ext, callback){
	
	fs.readdir(dirName, function(err, list){
		if(err){
			return callback(err, null);
		}else{
			list = list.filter(function(item){
				return path.extname(item) === ('.'+ext);	
			});

			callback(null, list);
		}
	});
};
