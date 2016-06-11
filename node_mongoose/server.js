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
	Dishes.create({
		name:"Uttapizza",
		discription:"test"
	},function(err,dish){
		if(err) throw err;
		console.log("created the dish");
		console.log(dish);
		var id = dish._id;

		setTimeout(function(){
			Dishes.findByIdAndUpdate(id,{
				$set:{
					discription:"Updated  the  test"
				} 
			},{
					new: true
			})
			.exec(function(err,dish){
				if(err) throw err;
				console.log("created the dish");
				console.log(dish);

				db.collection('dishes').drop();
				db.close();
			});
		},3000);
	});
});
