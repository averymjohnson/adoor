var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var passport = require('passport');
var session = require('express-session');
var PORT = process.env.PORT || 3000;
var app = express();
var auth = require('./routes/auth-routes.js');

// Requiring our models for syncing
var db = require("./models");


SALT_WORK_FACTOR = 12;

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Passport and Express-Session logic
app.use(session({secret: 'anything'}));

require('./config/passport')(app);


//Set up authentication routes
app.use('/auth', auth);

// Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
require('./routes/html-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
