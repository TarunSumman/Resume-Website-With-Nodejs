var express = require("express");

var app = express();

app.set("view engine","ejs");

app.use(express.static(__dirname + '/assets'));

app.get("/",function(req,res){
  res.render("index");
});

app.get("/resume",function(req,res){
  res.render("resume");
});

app.get("/portfolio",function(req,res){
  res.render("portfolio");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.listen(9010);
