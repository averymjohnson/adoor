var passport = require('passport');

module.exports = function(app){

	app.use(passport.initialize());
	app.use(passport.session());

	//Places a user in the session
	passport.serializeUser(function(user, done){
		done(null, user);
	});

	//Pulls a user back out of the session
	passport.deserializeUser(function(user,done){
		done(null, user);
	});

	require('./strategies/google.strategy')();
	require('./strategies/twitter.strategy')();
	require('./strategies/facebook.strategy')();
	require('./strategies/local.strategy')();

};
