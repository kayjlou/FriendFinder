//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//Load friend data
var friends = require('../data/friends.js');
var path = require('path');

//var difference = 0;

  module.exports = function(app){
  
    //API get request to display JSON of all friends
    app.get('/api/friends', function(req,res){
      res.json(friends);
    });

    //API post 
    app.post('/api/friends', function(req,res){

      //Push data 
      friends.push(req.body);

      //Compares the user input scores to the friends array
      var userScores = req.body.userScores;
      var scoresArray = [];
      var friendCount = 0;
      var match = 0;
      
      //Loops through the current friends in the coded friends array
      for (var i=0; i<friends.length; i++){
        var scoreDifference = 0;
        //Runs through the new scores of user input to compare to friends array 
        for (var k=0; k<userScores.length; k++){
          scoreDifference += (Math.abs(parseInt(friends[i].scores[k])- parseInt(userScores[k])));
        }

      //Put the results into the scoresArray 
      scoresArray.push(scoreDifference);
      }

      //After comparing the scores find the best match for the user
      for(var i=0; i<scoresArray.length; i++){
        if(scoresArray[i] <= scoresArray[match]){
          match = 0;
        }
      }

      //Returns the match data
      var finalMatch = friends[match];
      res.json(finalMatch);

      friends.push(req.body);
    });
  };



      //var match = {
       // name: '',
       // photo: '',
      //  matchDifference: 1000
     // };


