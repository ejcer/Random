var fs = require('fs');

var fp = process.argv[2];

var buf = fs.readFileSync(fp);
var str = buf.toString();
var lines = str.split('\n');
console.log(lines.length-1);
