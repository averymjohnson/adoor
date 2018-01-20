var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var passport = require('passport');
var session = require('express-session');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
require('./routes/html-routes.js')(app);
require('./routes/auth-routes.js')(app,passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
