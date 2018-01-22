var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function(){
	passport.use(new TwitterStrategy({
		consumerKey: 'SQWeIjxpbdHq7W3UufV0NmKLB',
		consumerSecret: 'FyFm6gq0Jqfz3SYl5ordiwZk28Yu8ln2iZUVSx5MtpdHA4JNGM',
		callbackUrl: 'http://localhost:3000/twitter/callback',
		passReqToCallback: true
	},
	function(req, token, tokenSecret, profile, done){
		var user = {};

		//user.email = profile.emails[0].value; twitter doesn't provide an email in the json file
		user.image = profile._json.image.url;
		user.displayName = profile.displayName;

		user.twitter = {};
		user.twitter.id = profile.id;
		user.twitter.token = accessToken;

		done(null, user);
	}));
};