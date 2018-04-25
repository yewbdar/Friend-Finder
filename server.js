var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app=express();
var PORT=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(PORT,function(){
    console.log("server start....",PORT);
    var htmlRoites=require("./app/routing/htmlRoutes");
    var apiRoutes=require("./app/routing/apiRoutes");
})
module.exports=app;