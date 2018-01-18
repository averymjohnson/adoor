var express = require('express');

var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
=======

>>>>>>> 641feb4675b589f9f0fd1c9a97652f2149346a2d
// Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/adoor-controllers.js');

app.listen(port);