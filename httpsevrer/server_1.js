var http= require('http');
var fs= require('fs');
var path = require('path');
var hostname ='localhost';
var port=3000;

var server = http.createServer(function(req,res){
	console.log(req.headers);

	if(req.method=='GET'){

		var fileUrl;
		if(req.url=='/'){
			fileUrl='/index.html';
		}
		else{
			fileUrl=req.url;
		}
		var filepath=path.resolve('./public'+fileUrl);
		var fileExt=path.extname(filepath);
		if(fileExt=='.html'){
			fs.exists(filepath,function(exists){
				if(!exists){
					res.writeHead(404,{'Content-Type' : 'text/html'});
					res.end('<h1> Not found  html file </h1>');
				}
				else{
					res.writeHead(200,{'Content-Type' : 'text/html'});
					fs.createReadStream(filepath).pipe(res);			
				}
			})
		}
	}
	else{
		res.writeHead(404,{'Content-Type' : 'text/html'});
					res.end('<h1> Not found GET Method</h1>');
	}

		
})

server.listen(port,hostname,function(){
	console.log('sevrer running at http://${localhost}:${port}/');
}); 