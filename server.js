var express = require('express');
// var methodOverride = require('method-override');//idk
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyparser.json());

// app.use(methodOverride('_method'));

// Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/adoor_controllers.js');

app.use('/', routes);

app.listen(port);