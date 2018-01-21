//var passport = require('passport');
var session = require('express-session');

//For Passport
app.use(session({secret:'adoorsecret', resave: true, saveUninitialized:true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

app.post('/user-login', passport.authenticate('local-signup', {
        successRedirect: '/matches',
 
        failureRedirect: '/signup'
    }
 
));