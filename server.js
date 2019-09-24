var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res) {
    res.send('Logowanie do Google localhost:3000/auth/google');
});

app.get('/auth/google', function(req, res){
    res.render('google_auth');
});

app.get('/auth/google_logged_in', function(req, res){
    res.render('google_logged_in');
});


var server = app.listen(3000, "localhost", function() {
    var host = server.address().address;
    var port = server.address().port;
  
    console.log("Przykładowa aplikacja nasłuchuje na http://" + host + ":" + port);
  });
  
  app.use(function(req, res, next) {
    res.status(404).send("Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!");
  });