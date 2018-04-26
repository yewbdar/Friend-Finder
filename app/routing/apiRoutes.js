
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

    var newUser = {
      name=req.body.name,
      photo=req.body.photo,
      score=req.body.score
    }

    var sum = [];
    friends.forEach(element => {
      var diffrence = [];
      console.log(element.score, user.score)
      for (var i = 0; i < element.score.length; i++) {

        diffrence.push(Math.abs(element.score[i] - newUser.score[i]))
        console.log(" element score " + element.score[i], " user score " + user.score[i])
        console.log("diff" + diffrence);
      }
      sum.push(diffrence.reduce(getSum))
      console.log(" diff " + diffrence, " sum " + sum)
    });
    function getSum(total, num) {
      return total + num;
    }
    var index = sum.indexOf(Math.min(...sum));
    console.log(friends[index].name);
    user.name = friends[index].name;
    user.photo = friends[index].photo;



  });
}





