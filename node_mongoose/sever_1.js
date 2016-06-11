var mongoose = require('mongoose'),
	assert= require('assert');

var Dishes = require('./models/dishes');

var url= 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function(){
	console.log('connection established successfully');

	// create new dishes
	var newDishes= Dishes({
		name:"Uttapizza",
		discription:"test"
	});
		
		newDishes.save(function (err) {
			if(err) throw err;

			console.log("dish is created");


			newDishes.find({},function(err,dishes){
				if(err) throw err;
				console.log(dishes);

				db.collection('dishes').drop();

			});

		});
});
