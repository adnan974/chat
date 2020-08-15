var express = require('express');
var http = require("http");
var querystring = require("querystring");
var url = require("url");
var bodyParser = require("body-parser");
var app = express();
var serveur = http.createServer(app);
//var io = require("socket.io").listen(serveur);


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/",function(req,res){
    res.render("chat.ejs");
})

app.post("/send",function(req,res){
    console.log(req.body);

})

/*io.on('connection',function(socket){

})*/



app.listen(8080);
