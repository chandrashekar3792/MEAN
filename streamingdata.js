var fs=require('fs');
var stream	= fs.createReadStream('./db.json');
stream.on('data',function(){
	console.log('chunk');
});
stream.on('end',function(){
	console.log('finished');
});