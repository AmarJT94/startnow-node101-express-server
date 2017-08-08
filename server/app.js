// import files and packages up here

var morgan = require("morgan");
var path = require('path');
var data = require("./data.json");
var updatedPath = path.join(__dirname, "topSpots");

// create your express server below

var express = require("express");
var app = express();

// add your routes and middleware below

app.use(morgan("dev"));
app.use("/", express.static(updatedPath));

app.get("/", function(req, res){
    res.sendStatus(200);
});

app.get("/data", function(req, res){
    res.status(200).json(data);
});

// finally export the express application
module.exports = app;
