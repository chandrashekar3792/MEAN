var argv=require('yargs')
		.usage('Usage: node $0 --l[num] --b[num]')
		.demand(['l','b'])
		.argv;
var rect= require('./rect_2');


function solveRect(l,b){
	console.log("length is:"+l+ "and Breadth is:"+b);
	rect(l,b,function(err,rectangle){
		if(err){
			console.log("error");
		}
		else{
			console.log(rectangle.perimeter());
			//console.log(rectangle.area());
		}
	});
};

solveRect(argv.l,argv.b);