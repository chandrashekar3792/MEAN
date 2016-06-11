var rect= {
	perimeter:function(x,y){
		return (2*(x+y));
	},
	area:function(x,y){
		return (x*y);
	}
};

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