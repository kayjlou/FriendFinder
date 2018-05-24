
//Include path package to get the correct file path for our html
var path = require('path');

module.exports = function(app){

 //When user goes to survey page
 app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
 });

 //Default to home if no matching route is found
 app.get('*', function(req,res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
 });
 
}