var concatStream = require('concat-stream');
var http = require('http');

var urlArr = [];
urlArr.push(process.argv[2]);
urlArr.push(process.argv[3]);
urlArr.push(process.argv[4]);

var resArr = [];
var count = 0;


function printResArr(){
        for(var i = 0; i < 3; i++){
                console.log(resArr[i]);
        };
}




function httpGetAtUrlIndex(i){
	http.get(urlArr[i], function(res){
		res.pipe(concatStream(function(data){
			resArr[i] = data.toString();
			count+=1;
			if(count == 3){
				printResArr();
			}
		}));	
	});
}


for(var i = 0; i < urlArr.length; i++){
	httpGetAtUrlIndex(i);
}



