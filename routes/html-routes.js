// add routes
var path = require("path");
var express = require('express');
var router = express.Router();
var db = require("../models");
var bcrypt = require('bcrypt-nodejs');
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');

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

  // Buyer Create a Profile Page
  app.get('/profile-create', function (req, res) {
    res.render('signUp');
  });

  // Quiz page
  app.get('/survey', function (req, res) {
    res.render('quiz');
  });

  // Matching Page
  app.get('/matching', function (req, res) {

    console.log(localStorage.getItem('currentUserID'));

    db.listing.findAll({}).then(function(data) {
      var listings = [];
      //push listing objects into listings array
      data.forEach(function(element) {
        listings.push(element.dataValues);
      })
      //randomly sort listings
      listings.sort(function(a,b) { return 0.5 - Math.random() });
      //prepare object
      var hbsObject = {
        listings: listings
      };
      //render page
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