// server.js

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db.js');
const PORT = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err,database)=>{
	if (err) return console.error(err);

	require('./app/routes')(app, database);

	app.listen(PORT, ()=> {
	console.log("we are live on port "  + PORT);
})

})

