var assert = require('assert');

exports.insertDucument=function(db,document,collection,callback){
	// set the db collection
	coll=db.collection(collection);

	// insert the new document into the collection
	coll.insert(document,function(err,docs){
		assert.equal(err,null);
		console.log("the document"+document+'was inserted in to the collection:'+collection);
		callback(docs);
	});
};


exports.findDocument=function(db,collection,callback){
	// set the db collection
	coll=db.collection(collection);

	// find the document into the collection
	coll.find({}).toArray(function(err,docs){
		assert.equal(err,null);
		console.log("the document in the collection are "+ docs);
		callback(docs);
	});
};

exports.deleteDocument=function(db,document,collection,callback){
	// set the db collection
	coll=db.collection(collection);

	// delete single document into the collection
	coll.deleteOne(document,function(err,docs){
		assert.equal(err,null);
		console.log("the first document'was deleted"+document);
		callback(docs);
	});
};

exports.updateDocument=function(db,document,update,collection,callback){
	// set the db collection
	coll=db.collection(collection);

	// update document into the collection
	coll.updateOne(document,{$set:update},null,function(err,docs){
		assert.equal(err,null);
		console.log("the document"+update+'was updated:');
		callback(docs);
	});
};