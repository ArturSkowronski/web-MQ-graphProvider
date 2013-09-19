var express=require("express");
var app=express();

app.use(express.logger());

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
});

app.use("/public", express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', {option: 'value'});
});  

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});