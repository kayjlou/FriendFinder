//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//Load friend data
var friends = require("../data/friends.js");

module.exports = function (app) {

  //API get request to display JSON of all friends
  app.get("/api/friends", function (req, res) {
    //Returns json of friends
    res.json(friends);
  });

  //API post
  app.post("/api/friends", function (req, res) {
    //Take in new values(name, photo score)
    var newUser = req.body
    //Pass into findMatch function
    let newMatch = findMatch(newUser)
    //Push to friends .json
    friends.push(newUser)
    //Return new match
    return res.send(newMatch)
  })

  // This function runs to find match
  const findMatch = (newUser) => {
    var userScores = newUser.scores
    //Preset match data
    var match = {
      name: "",
      photo: "",
      matchDifference: 200
    };
    console.log("We are finding new match for " + newUser.name)


    //  newUser.scores
    //Loops through the current friends to get scores
    for (var i = 0; i < friends.length; i++) {
      console.log("Checking match with: " + friends[i].name);
      var currentFriend = friends[i]
      var totalDifference = 0;



      //Runs through the new scores of user input to compare to friends
      for (var k = 0; k < currentFriend.scores.length; k++) {
        var currentFriendScore = currentFriend.scores[k]
        var currentUserScore = userScores[k]
        totalDifference += Math.abs(
          parseInt(currentUserScore) - parseInt(currentFriendScore)
        );
        console.log("the total difference is: " + totalDifference)
      }

      //If sum of differences is less than differences of the current match
      if (totalDifference <= match.matchDifference) {
        match = {
          name: currentFriend.name,
          photo: currentFriend.photo,
          matchDifference: totalDifference
        }
        console.log("The new match is" + match.name)
      }

    }
    return match
  }
};
