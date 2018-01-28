var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(){

	passport.use(new FacebookStrategy({
		clientID: '927418800748086',
		clientSecret: '5516c73f7792f37ff054048f8dc1931f',
		callbackURL: 'https://dry-wildwood-96018.herokuapp.com/auth/facebook/callback',
		passReqToCallback: true
	},
	function(req, accessToken, refreshToken, profile, done){
		var user = {};

		//user.email = profile.emails[0].value;
		//user.image = profile._json.image.url;  To access images a token is needed.
		user.displayName = profile.displayName;

		user.facebook = {};
		user.facebook.id = profile.id;
		user.facebook.token = accessToken;

		done(null, user);

	}));
};