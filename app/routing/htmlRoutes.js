
var app = require("../../server");
var path = require("path");

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

