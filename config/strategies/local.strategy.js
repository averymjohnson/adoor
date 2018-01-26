var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var db = require('../../models');
var userModel = require('../../models/user');

module.exports = function(){

    // Use local strategy to create user account
passport.use('local',new LocalStrategy({
	usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
   },
  function(req, username, password, done) {
  
  	console.log("USERNAME: " + username);
    db.user.findOne({ where: { email: username }}).then(function(user){
      if (!user) {
        done(null, false, { message: 'Unknown user' });
      } else if (password != user.password) {
        done(null, false, { message: 'Invalid password'});
      } else {
        done(null, user);
      }
    }).error(function(err){
      done(err);
    });
  }
));


};//end of module.exports