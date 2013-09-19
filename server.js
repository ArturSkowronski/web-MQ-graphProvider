var express=require("express");

var app=express();
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
});

app.use("/public", express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', {option: 'value'});
});
  

app.listen(3001);  