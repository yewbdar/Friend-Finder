
var app=require("../../server");
var path = require("path");
var friends=require("../data/friends");
var fs=require("fs");


 app.get("/api/friends",function(req,res){
     console.log("am here");
    //var data = fs.readFile( "../data/friends.js","utf8",function(err,res){
   var word=JSON.parse(req.friends);
   
    console.log(word);
  //});
 });
 
  app.post("/api/friends",function(){

  });

  console.log(friends[0].scores);

    

 

