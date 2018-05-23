//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//Load friend data
var friendsData = require('../data/friends.js');
var path = require('path');

var difference = 0;

  module.exports = function(app){
  
    //API get request to display JSON of all friends
    app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  //Post - push user input 
    app.post('/api/friends', function(req,res){
       
      var match = {
        name: '',
        image: '',
        difference: 1000
      };


      var userInfo = req.body;
      var userName = userInfo.name;
      var userPic = userInfo.pic;
      var userScores = userInfo.scores;

      var difference = 0;

      //Loops through array to get the scores to compare
      for (var i=0; i< [friends].length-1; i++){
        console.log(friends[i].name);
        difference = 0;


      //Loops through the friends score and user score to calculate absolute difference 
      //Then push that difference 
      for (var k=0; k<10; k++){
        
      }
      }

    })
  //app.post()
}