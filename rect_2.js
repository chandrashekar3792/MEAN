module.exports= function(x,y,callback){
	try{
		if(x<0 || y<0){
			console.log(" length and Breadth should be greater than zero");
		}
		else
			callback(null,{
					perimeter:function(x,y){
						return (2*(x+y));
					},
					area:function(x,y){
						return (x*y);
					}
			});
	}
	catch(error){
		callback(error,null);
	}
}
var rect= {
	perimeter:function(x,y){
		return (2*(x+y));
	},
	area:function(x,y){
		return (x*y);
	}
};