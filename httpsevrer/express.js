var express= require('express'),
http=require('http');

var host='localhost';
var port=3000;

// usage of the express framework

var app = express();


app.use(function(req,res,next){
	console.log(req.Headers);
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<html><body><h1> Hello express </h1></body></html>');
});

var server= http.createServer(app);
server.listen(port,host,function(){
	console.log("localhost:3000");
});