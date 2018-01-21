var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var passport = require('passport');
var session = require('express-session');
var port = process.env.PORT || 3000;
var app = express();
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var auth = require('./routes/auth-routes.js');

//Plug google strategy into passport
passport.use(new GoogleStrategy({
	clientID: '786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com',
	clientSecret: 'yGWrMDHR6s87L9Mk0NaAfTnW',
	callbackURL: 'http://localhost:3000/auth/google/callback'},
	function(req, accessToken, refreshToken, profile, done){
		done(null, profile);
	}
));

SALT_WORK_FACTOR = 12;

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Passport and Express-Session logic
app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret: 'anything'}));

//Set up authentication routes
app.use('/auth', auth);

// Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
require('./routes/html-routes.js')(app);


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

//Places a user in the session
passport.serializeUser(function(user, done){
	done(null, user);
});

//Pulls a user back out of the session
passport.deserializeUser(function(user,done){
	done(null, user);
});
