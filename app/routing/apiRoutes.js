
var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
    res.send(json(friends));
    console.log("am here " + json(friends))

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
      for (var i = 0; i < element.scores.length; i++) {

        diffrence.push(Math.abs(element.scores[i] - newUser.score[i]));
      }
      sum.push(diffrence.reduce(getSum));

    });
    var index = sum.indexOf(Math.min(...sum));
    matchFriend.name = friends[index].name;
    matchFriend.photo = friends[index].photo;

    res.json(matchFriend)

    function getSum(total, num) {
      return total + num;
    }

  });
}





