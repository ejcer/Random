var express = require('express');
var stylus = require('stylus');
var app = express();

var views = process.argv[3];


app.use(stylus.middleware(views)); //Configure stylus's directory then use it

app.use(express.static(views)); //tell express.static where the files are















app.listen(process.argv[2]);
