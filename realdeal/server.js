const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
const MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.

//(Focus on This Variable)
const url = 'mongodb://localhost:27017/my_database_name';      
//(Focus on This Variable)

// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});