var rect= require('./rect_1');
function solveRect(l,b){
	console.log("length is:"+l+ "and Breadth is:"+b);
	if(l<0 || b<0){
		console.log(" length and Breadth should be greater than zero");
	}
	else{
		console.log(rect.perimeter(l,b));
		console.log(rect.area(l,b));
		}
}
solveRect(20,10);