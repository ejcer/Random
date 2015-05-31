var express = require('express');



var port = process.argv[2];
var fp = process.argv[3];

var app = express();

app.use(express.static(fp || path.join(__dirname, 'public')));


app.listen(port);
