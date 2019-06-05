//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//Load friend data
var friends = require("../data/friends.js");
var path = require("path");

module.exports = function (app) {

  //API get request to display JSON of all friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //API post
  app.post("/api/friends", function (req, res) {
    //Push data

    //Preset match data
    var match = {
      name: "",
      photo: "",
      matchDifference: 1000
    };

    var userInfo = req.body;
    // var userName = userInfo.name;
    // var userPhoto = userInfo.photo;
    var userScores = userInfo.scores;


    // friends.push(userInfo);




    //Loops through the current friends to get scores
    for (var i = 0; i < friends.length; i++) {
      console.log("Checking match with:" + friends[i].name);
      var totalDifference = 0;


      //Runs through the new scores of user input to compare to friends
      for (var k = 0; k < 11; k++) {
        totalDifference += Math.abs(
          parseInt(userScores[k]) - parseInt(friends[i].scores)
        );
        console.log(friends[i].name)
        console.log("the total difference is: " + totalDifference)

        //If sum of differences is less than differences of the current match
        if (totalDifference <= match.matchDifference) {
          let match = {
            name: friends[i].name,
            photo: friends[i].photo,
            matchDifference: totalDifference
          }
          console.log("The new match is" + match)

          res.send(match)
        }
      }
    }

    //Returns the match data
    console.log("Pushing info to friends json")
    friends.push(userInfo);
    // console.log("The match is" + match);

  });
};
