// add routes
var path = require("path");
var express = require('express');
var router = express.Router();
var db = require("../models");
var bcrypt = require('bcrypt-nodejs');

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
  });

  // log-in page
  app.get('/log-in', function (req, res) {
    res.render('log-in');
  });

  // Bueyr Create a Profile Page/Fill out Survey
  app.get('/profile-create', function (req, res) {
    res.render('signUpWithQuiz');
  });

  // Matching Page
  app.get('/matching', function (req, res) {
    db.listing.findAll({}).then(function(data) {
      var listings = [];
      data.forEach(function(element) {
        listings.push(element.dataValues);
      })
      var hbsObject = {
        listings: listings
      };

    console.log(hbsObject);

    res.render('matching', hbsObject);
    });
  });

  // My Matches Page
  app.get('/my-matches', function (req, res) {
    res.render('my-matches');
  });

  app.get('/its-a-match', function (req, res) {
    res.render('adoor');
  });


 // Seller Routes
 // ==========================================================

 // Seller Create Profile

  // Upload New Listing Page
  app.get('/new-listing', function (req, res) {
    res.render('createListing');
  });
};