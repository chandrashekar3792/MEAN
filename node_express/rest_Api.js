var express= require('express');
var morgan=require('morgan');
var bodyParser=require('body-parser');

var host='localhost';
var port=3000;

// usage of the express framework

var app = express();
app.use(morgan('dev'));// preformated lop output

app.use(bodyParser.json());

app.all('/dishes',function(req,res,next){

	res.writeHead(200,{'Content-Type':'text/html'});
	next();
}); 

app.get('/dishes',function(req,res,next){

	res.end('will send all dishes to you');
}); 

app.post('/dishes',function(req,res,next){

	res.end('will add the  dishes'+ req.body.name+'with detaiols:'+req.body.description);
});

app.delete('/dishes',function(req,res,next){

	res.end('delete all the dishes');
});

app.get('/dishes/:dishId',function(req,res,next){

	res.write('Send dish details:'+req.params.dishId+'\n');
});

app.post('/dishes/:dishId',function(req,res,next){

	res.write('Updating dish:'+req.params.dishId+'\n');
	res.end('will update the dish:'+req.body.name+'with details'+req.body.description);
});

app.delete('/dishes/:dishId',function(req,res,next){

	res.write('delete dish details:'+req.params.dishId+'\n');
});

app.use(express.static(__dirname+'/public'));

app.listen(port,host,function(){
	console.log("localhost:3000");
});