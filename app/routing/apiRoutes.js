
//var app=require("../../server");
var path = require("path");
var friends = require("../data/friends");
// var survey=require("../public/survey")
//var fs=require("fs");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);

  });

  app.post("/api/friends", function (req, res) {

     var newUser = req.body;
    var matchFriend = {
      name: "",
      photo: ""
    }
    var sum = [];
    friends.forEach(element => {
      var diffrence = [];
      // console.log(element.scores, newUser.score)
      for (var i = 0; i < element.scores.length; i++) {

        diffrence.push(Math.abs(element.scores[i] - newUser.score[i]))
        // console.log(" element score " + element.scores[i], " user score " + newUser.score[i])
        // console.log("diff" + diffrence);
      }
      sum.push(diffrence.reduce(getSum))
      // console.log(" diff " + diffrence, " sum " + sum)
    });
    var index = sum.indexOf(Math.min(...sum));
    // console.log(friends[index].name);
    matchFriend.name = friends[index].name;
    matchFriend.photo = friends[index].photo;

    console.log("matchFriend " + matchFriend.name +  " "+ matchFriend.photo )
     res.json(matchFriend)
   
     function getSum(total, num) {
      return total + num;
    }

  });
}





