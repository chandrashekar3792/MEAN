// HTTP server example

//var http = require('http');
//http.createServer(function (req,res) {
	// body...
//	res.writeHead(200,{'Content-type':'text/plain'});
//	res.end('Hello World\n');
//}).listen(3000);
//console.log("server running at port :3000");

// explicit event request
var http = require('http');
var server=http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello World\n');
});
server.listen(3000);
console.log("server running at port :3000");