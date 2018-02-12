var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/index", function(req, res){
    res.render("index");
});

app.get("/photo", function(req, res){
    res.render("photo");
});

app.get("/video", function(req, res){
    res.render("video");
});

app.get("/drone", function(req, res){
    res.render("drone");
});

app.get("/contact", function(req, res){
    res.render("contact");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Willma Server Started!");
});