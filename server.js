//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Create an instance of express app
var app = express();

//Sets the port
var PORT = process.env.PORT || 8080;

//Link to bodyparser for incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Link to application using path
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listen on port
app.listen(PORT, function() {
  console.log("Listening on PORT: http://localhost:" + PORT);
});
