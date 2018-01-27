
var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/google/callback')
	.get(passport.authenticate('google',{
		failureRedirect: '/error'}), function(req, res){
			res.redirect('/survey');
		});


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

router.route('/local-login')
	.post(passport.authenticate('local', { failureRedirect: '/profile-create' }),
  function(req, res) {
    res.redirect('/matching');
  });

module.exports = router;
