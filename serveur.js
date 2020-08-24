var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


// Question: pourquoi je met "app" en parametre. cad comment fonctionne la methode createServer ?
var server = require("http").createServer(app);

app.get('/',function(req,res){
    res.render('chat.ejs');
});
app.post("/",function(req,res){
   // res.render('chat.ejs');
});

var io = require("socket.io").listen(server);

io.sockets.on("connection",function(socket){
    console.log("un client s'est connecté");
    socket.on("chatEntry",function(entry){
        console.log("socket reception : "+entry);
        socket.broadcast.emit('message',entry)
    });
});

//app.listen(8080);
server.listen(8080);
