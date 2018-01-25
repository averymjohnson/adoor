
var db = require("../models");
var bcrypt = require('bcrypt-nodejs');
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');

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
      localStorage.setItem("currentUserID", user.id);
      console.log(user.id);
      console.log("First Time Created??: " + created);
      console.log("New user created and inserted in User table");
      });
  	});

  	// POST route for saving a new post
  app.post("/api/listing", function(req, res) {
    db.listing.create({address: req.address, city: req.city, zipcode: req.zip, bedrooms: req.bed,
    	bathrooms: req.baths, price: req.price}).then(function(){
    		console.log("Listing Added to the database!");
    	});
    res.redirect('/matching');//this should be changed once to my-listings page.
  });

// pull my-matches from the db
  app.get("/api/my-matches", function(req, res) {
    db.match.findAll().then(function(myMatch){
      res.json(myMatch);
      console.log("logged matches");
    })
  })

  app.post("/api/match/check", function(req, res) {
    console.log(req.body);
    res.end();
  })

};

