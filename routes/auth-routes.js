
var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/google/callback')
	.get(passport.authenticate('google',{
		successRedirect: '/matching',
		failure: '/error/'
}));


router.route('/google')
	.get(passport.authenticate('google',{
		scope:['https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email']
}));

router.route('/twitter/callback')
	.get(passport.authenticate('twitter',{
		successRedirect: '/matching',
		failure: '/error/'
}));


router.route('/twitter')
	.get(passport.authenticate('twitter'));


router.route('/facebook/callback')
	.get(passport.authenticate('facebook',{
		successRedirect: '/matching',
		failure: '/error/'
}));


router.route('/facebook')
	.get(passport.authenticate('facebook',{
		scope:['email']
}));

// process the signup form
router.route('/signUpWithQuiz')
    .post(passport.authenticate('local-signup', {
        successRedirect : '/my-matches', // redirect to the secure profile section
        failureRedirect : '/profile-create', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
}));

router.route('/log-in')
	.post(passport.authenticate('local', {
	        successRedirect : '/matching', // redirect to the secure profile section
	        failureRedirect : '/log-in', // redirect back to the signup page if there is an error
	        failureFlash : true // allow flash messages
	    }));

module.exports = router;
