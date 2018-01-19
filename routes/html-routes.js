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
    console.log("home page is working");
  });

  // log-in page
  app.get("/log-in", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
    console.log("Log-In is working");
  });

  // Bueyr Create a Profile Page/Fill out Survey
  app.get("/profile-create", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
  });

  // Matching Page
  app.get("/matching", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
  });

  // My Matches Page
  app.get("/my-matches", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
  });

  

 // Seller Routes
 // ==========================================================

 // Seller Create Profile
  app.get("/admin-create", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
  });

  // Upload New Listing Page
  app.get("/add-listing", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
  });

  //Manage Listings Page 
  app.get("/manage-listings", function(req, res) {
    // res.sendFile(path.join(__dirname, ""));
  });


};