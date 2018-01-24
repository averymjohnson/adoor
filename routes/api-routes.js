
var db = require("../models");
var bcrypt = require('bcrypt-nodejs');

module.exports = function(app) {

	app.get("/api/users", function(req, res) {
		
	  req.passwordHash = bcrypt.hashSync(req.password);         
          
      db.user.findOrCreate({where: {email: req.user.email} ,defaults: {firstName: req.user.firstName, lastName: req.user.lastName, password: req.passwordHash}})//.then(function(dbUser) {
        .spread((user, created) => {
            console.log(user.get({
            plain: true

      }));
      if(created === true){
        res.redirect('/survey');
      }
      else{
      	res.redirect('/matching');
      }
      console.log("First Time Created??: " + created);
      console.log("New user created and inserted in User table");
      });
  	});

};

