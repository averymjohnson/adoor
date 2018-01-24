
var db = require("../models");
var bcrypt = require('bcrypt-nodejs');

module.exports = function(app) {

	app.post("/api/users", function(req, res) {
		
		req.passwordHash = bcrypt.hashSync(req.password);         
          
	    db.User.create({req.email, req.passwordHash}).then(function(dbUser) {
	      res.json(dbUser);
	    });

	    console.log("New user created and inserted in User table");
  	});

};

