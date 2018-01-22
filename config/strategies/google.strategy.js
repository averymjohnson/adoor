var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(){

	//Plug google strategy into passport
	passport.use(new GoogleStrategy({
		clientID: '786832441182-3vhl05ve7u3ee3fr35j477lnv2gqv2h0.apps.googleusercontent.com',
		clientSecret: 'yGWrMDHR6s87L9Mk0NaAfTnW',
		callbackURL: 'http://localhost:3000/auth/google/callback'},
		function(req, accessToken, refreshToken, profile, done){
			var user = {};

			user.email = profile.emails[0].value;
			user.image = profile._json.image.url;
			user.displayName = profile.displayName;

			user.google = {};
			user.google.id = profile.id;
			user.google.token = accessToken;

			done(null, user);
		}
	));

};