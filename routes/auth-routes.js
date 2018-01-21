<<<<<<< HEAD
var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/google/callback')
	.get(passport.autheticate('google',{
		successRedirect: '/users/',
		failure: '/error/'
}));


router.route('/google')
	.get(passport.autheticate('google',{
		scope:['https:www.googleapis.com/auth/userinfo.profile',
			'https://googleapis.com/auth/userinfo.email']
}));

module.exports = router;
=======
// //var passport = require('passport');
// var session = require('express-session');

// //For Passport
// app.use(session({secret:'adoorsecret', resave: true, saveUninitialized:true})); //session secret
// app.use(passport.initialize());
// app.use(passport.session()); //persistent login sessions

// app.post('/user-login', passport.authenticate('local-signup', {
//         successRedirect: '/matches',
 
//         failureRedirect: '/signup'
//     }
 
// ));
>>>>>>> 4f66b834e3f0e728f64190e1028a03f4b52113f6
