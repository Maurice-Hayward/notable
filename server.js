// server.js

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const PORT = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


require('./app/routes')(app, {});
app.listen(PORT, ()=> {
	console.log("we are live on port "  + PORT);
})