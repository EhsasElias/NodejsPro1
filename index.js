
// const express = require("express");
// const app = express();
// const path = require('path');
// let router = express.Router();
// app.use(express.static('public'));

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname,'index.html'));
//  return res.end();
// });

// }).listen(3506);

var express = require('express');
var app = express();
var path = require('path');
var PORT = 3002;
app.use(express.static(__dirname + 'public'));
// Without middleware
app.get('/', function(req, res){
	var options = {
		root: path.join(__dirname)
	};
	
	var fileName = 'index.html';
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', fileName);
		}
	});
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
