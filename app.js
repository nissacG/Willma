var express = require("express"),
	app = express()

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/index", function(req, res){
    res.render("index");
});

app.get("/photo", function(req, res){
    res.render("./gallery/photo");
});

// app.get("/video", function(req, res){
//     res.render("./gallery/video");
// });

// app.get("/drone", function(req, res){
//     res.render("./gallery/drone");
// });

app.get("/contact", function(req, res){
    res.render("contact");
});

// app.listen(5000, function(){
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Willma Server Started!");
});