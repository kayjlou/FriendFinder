
var path = require('path');

module.exports = function(app){
 //When user goes to survey page
 app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
 });

 //Default to home
 app.use(function(req,res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
 });
 
}