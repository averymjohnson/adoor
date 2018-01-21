var bCrypt = require('bcrypt-nodejs'); //secure passwords
var db = require('../models');

module.exports = function(passport, user) { 
	var User = user;

    var LocalStrategy = require('passport-local').Strategy; 

    

//serialize
passport.serializeUser(function(user, done) {
 
    done(null, user);
 
});

// deserialize user 
passport.deserializeUser(function(id, done) {
 
    db.User.find({where: {id: user.id}}).success(function(user){
    	done(null, user);
    }).error(function(err){
    	done(err, null);
    });
 
});

//For Authentication Purposes
passport.use(new LocalStrategy(
	function(username, password, done){
		db.User.find({where: {username: username}}).success(function(user){
			passwd = user ? user.password : ''
			isMatch = db.User.validPassword(password, passwd, done, user)
		});	
	}
	));

}

