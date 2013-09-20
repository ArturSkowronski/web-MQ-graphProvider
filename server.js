var express=require("express");
var app=express();


app.use(express.logger());

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
});

app.use("/public", express.static(__dirname + '/public'));


var redisURL="redis://redistogo:d1c1fc905ceb6da99dd8fb014f5dbcb5@jack.redistogo.com:9513";
if (redisURL) {
    var rtg   = require("url").parse(redisURL);
    var redis = require("redis").createClient(rtg.port, rtg.hostname);
    redis.auth(rtg.auth.split(":")[1]);
} else {
    var redis = require("redis").createClient();

}

app.get('/', function(req, res){
    console.log("index");
    redis.get("foo", function(err, value) {
        console.log("redisZSerwera: "+value);
    });
    res.render('index', {option: 'value'});
});

app.get('/rest', function(req, res){
    console.log("index");
    redis.get("foo", function(err, value) {
        console.log("redisZSerwera: "+value);
    });
    res.render('index', {option: 'value'});
});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});