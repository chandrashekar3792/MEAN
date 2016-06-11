// we use file system module to load the json file here

var fs=require("fs");
fs.readFile('./db.json',function(error,data){
	console.log(data);
});