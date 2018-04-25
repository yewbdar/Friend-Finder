
var app=require("../../server");
var path = require("path");
var friends=require("../data/friends");
var fs=require("fs");

module.exports = function (app){
 app.get("/api/friends",function(req,res){
     res.json(friends);
    
 });
 
  app.post("/api/friends",function(){

  });
}
  
    

 

