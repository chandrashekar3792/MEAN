var MongoClient = require('mongodb').MongoClient,
	assert= require('assert');

var doper= require('./operations');

// url for database connections

var url= 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url,function(err,db){
	assert.equal(err,null);
	doper.insertDucument(db,{name:"vodanut",discription:"test"},"dishes",function(result){
		console.log(result);
		doper.findDocument(db,"dishes",function(docs){
			console.log(docs);
			doper.updateDocument(db,{name:"uttapizza"},{discription:"updated test"},"dishes",function(result){
				console.log(result);
				doper.findDocument(db,"dishes",function(doc){
					console.log(doc);
					db.dropCollection("dishes",function(err,result){
						assert.equal(err,null);
						db.close();
					});
				})
			});
		});
	});
});