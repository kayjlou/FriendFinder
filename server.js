//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//Create an instance of express app
var app = express();

//Sets the port
var PORT = process.env.PORT || 8080;

//Link to directory
app.use(express.static(path.join(__dirname, './app/public')));

//Link to bodyparser for incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());

//Link to application using path
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//Listen on port 
app.listen(PORT, function(){
  console.log("Listening on PORT: " + PORT);
})