// add routes
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

// Buyer Routes
// =============================================================

  // index/home page
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("home page load successful");
  });

  // log-in page
  app.get("/log-in", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("log in page load successful");
  });

  // Bueyr Create a Profile Page/Fill out Survey
  app.get("/profile-create", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("profile create page load successful");
  });

  // Matching Page
  app.get("/matching", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("matching page load successful");
  });

  // My Matches Page
  app.get("/my-matches", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("my matches page load successful");
  });

  

 // Seller Routes
 // ==========================================================

 // Seller Create Profile
  app.get("/admin-create", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("admin create page load successful");
  });

  // Upload New Listing Page
  app.get("/add-listing", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("add listing page load successful");
  });

  //Manage Listings Page 
  app.get("/manage-listings", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("manage listing page load successful");
  });


};