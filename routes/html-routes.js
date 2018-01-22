// add routes
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
	
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
    res.render('signUpWithQuiz');;
    console.log("profile create page load successful");
  });

  // Matching Page
  app.get('/matching', function (req, res) {
    res.render('adoor');;
    console.log("matching page load successful");
  });

  // My Matches Page
  app.get('/my-matches', function (req, res) {
    res.render('my-matches');;
    console.log("my matches page load successful");
  });

  app.get('/its-a-match', function (req, res) {
    res.render('adoor');;
    console.log("it's a match page load successful");
  });

  

 // Seller Routes
 // ==========================================================

 // Seller Create Profile

  // Upload New Listing Page
  app.get('/new-listing', function (req, res) {
    res.render('adoor');;
    console.log("add listing page load successful");
  });
};