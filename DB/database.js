const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://<username>:<password>@cluster0.vjyk9.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Connected to MongoDB");
    // Your code goes here
    db.close();
});
