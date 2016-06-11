var MongoClient = require('mongodb').MongoClient,
		assert= require('assert');

// connection to the url
var url='mongodb://localhost:27017/conFusion';

MongoClient.connect(url,function(err,db){
	assert.equal(err,null);
	console.log("connection to the database was successful");

	var collection = db.collection('dishes');
	// insert  the document in to the  dishes collections
	collection.insertOne({name:"Uttapizaa",discription:"test"},function(err,result){
		assert.equal(err,null);
		console.log(" the document was inserted");
		console.log(result.ops);
		// retrieving the documents in a collection

		collection.find({}).toArray(function(err,docs){
			assert.equal(err,null);
			console.log("found");
			console.log(docs);
			// dropping the collections from the database

			db.dropCollection("dishes",function(err,result){
				assert.equal(err,null);
				db.close();
			});
		}); 
	});

});