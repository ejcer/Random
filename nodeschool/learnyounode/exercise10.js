var net = require('net');


var port = process.argv[2];


function zeroFill( number, width )
{
  width -= number.toString().length;
    if ( width > 0 )
      {
          return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
	    }
	      return number + ""; // always return a string
	      }

var server = net.createServer(function(socket){
	var date = new Date();
	
	var data = date.getFullYear() + '-' + zeroFill(date.getMonth()+1,2) + '-' + zeroFill(date.getDate(),2) + ' ' + date.getHours() + ':' + date.getMinutes()+ '\n';

	socket.end(data);
});

server.listen(port);
