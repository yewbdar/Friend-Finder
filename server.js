var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app=express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'/app/public')));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT,function(){
    console.log("server start....",PORT);
   
})
module.exports=app;