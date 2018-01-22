// add routes
var path = require("path");
var express = require('express');
var router = express.Router();

// Routes
// =============================================================
module.exports = function(app) {

/*Middleware that will allow the users to access the index page only
// if they aren't signed in.*/
//==============================================================
router.use('/', function(req, res, next){
  if(!req.user){
    res.redirect('index');
  }
  next();

});
	
// Buyer Routes
// =============================================================

  // index/home page
  app.get('/', function (req, res) {
    res.render('index');
    console.log("working");
  });

  // log-in page
  app.get('/log-in', function (req, res) {
    res.render('log-in');;
    console.log("log in page load successful");
  });

  // Bueyr Create a Profile Page/Fill out Survey
  app.get('/profile-create', function (req, res) {
    res.render('adoor');;
    console.log("profile create page load successful");
  });

  // Matching Page
  app.get('/matching', function (req, res) {
    //For google login testing purposes we are rendering log-in here, once we have
    //the matches page working we can update this.
    res.render('log-in', {user: {name: req.user.displayName,
                                    image: req.user.image}});
    console.log("matching page load successful");
  });

  // My Matches Page
  app.get('/my-matches', function (req, res) {
    res.render('adoor');;
    console.log("my matches page load successful");
  });

  app.get('/its-a-match', function (req, res) {
    res.render('adoor');;
    console.log("it's a match page load successful");
  });

  

 // Seller Routes
 // ==========================================================

 // Seller Create Profile
  app.get('/admin-create', function (req, res) {
    res.render('adoor');;
    console.log("admin create page load successful");
  });

  // Upload New Listing Page
  app.get('/new-listing', function (req, res) {
    res.render('adoor');;
    console.log("add listing page load successful");
  });

  //Manage Listings Page 
  app.get('/manage-listings', function (req, res) {
    res.render('adoor');;
    console.log("manage listing page load successful");
  });


};