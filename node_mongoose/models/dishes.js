var mongoose = require('mongoose');

var Schema= mongoose.Schema;

var dishSchema = new Schema({
	name: {
		type:String,
		required: true,
		unique: true
	},
	discription:{
		type: String,
		required: true
	}
},{
	timpstamp:true
});

var Dishs = mongoose.model('Dish',dishSchema);

// for the purpose of the export the model for the collections
module.exports=Dishs;