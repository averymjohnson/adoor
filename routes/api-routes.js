
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
    console.log(req.body);
    db.listing.create({
      address: req.body.address, 
      city: req.body.city, 
      zipcode: req.body.zip, 
      bedrooms: req.body.bed,
    	bathrooms: req.body.bath, 
      price: req.body.price,
      picturePath: req.body.img
      })
    .then(function(dbListing){
    		console.log("Listing Added to the database!");
    	});
    res.redirect('/matching');
  });

  app.post("/api/match/check", function(req, res) {
    var userId = localStorage.getItem('currentUserID');
    var listingId = req.body.listingId;
    var userObj;
    var community;

    // findUser(userId);
    findCommunityInfo(listingId).then(function(info){
      console.log(info);
      community = info;
      return findUser(userId);
    }).then(function(user){
      console.log(user);
      userObj = user;
      return checkForCommunityMatch(userObj, community);
    }).then(function(compatibilityScore){
      console.log(`Your Compatability Score is: ${compatibilityScore}`);
    }).catch(function(err) {
      console.log(err);
    });

    // checkForCommunityMatch(6, 3);
    


    function findCommunityInfo(listingId) {
      return new Promise(function(resolve, reject){
          db.community.findOne({
            where: {
              listingId: listingId
            }
          }).then(function(communityInfo) { 
            if (communityInfo !== undefined) {
              resolve(community = communityInfo);
            } else {
              reject(console.log("cannot retrieve info"));
            }
          })
        });
      }

    
    function findUser(id) {
      return new Promise(function(resolve, reject){
        db.user.findOne({
        where: {
          id: id
        }
      }).then(function(user) {
        if (user !== undefined) {
        resolve(userObj = user);
        } else {
          reject(console.log("cannot retrieve info"))
        }      
      })
      });
    }
    
    function createMatch() {
      db.match.create({
        userId: userId,
        listingId: listingId
      }).then(function(){});
    }

    function checkForCommunityMatch(user, community) {
      //checks user preferences vs. the listing's community score
      var compatibilityScore = 0;
      
      if (
        userObj.dataValues.caresAboutSchools === true && 
        community.dataValues.bestSchoolRating > 8) 
      {
        compatibilityScore++;
      } else if (
        userObj.dataValues.caresAboutGroceryStores === true && 
        community.dataValues.groceryStoresCount > 0)
      {
        compatibilityScore++;
      } else if (
        userObj.dataValues.caresAboutParks === true &&
        community.dataValues.parksCount > 0)
      {
        compatibilityScore++;
      } else if (
        userObj.dataValues.caresAboutCrime === true &&
        community.dataValues.crimesCount < 30)
      {
        compatibilityScore++;
      } else if (
        userObj.dataValues.caresAboutHospitals === true &&
        community.dataValues.hospitalsCount > 0)
      {
        compatibilityScore++;
      }

      return compatibilityScore;
    }

    


    console.log(`user: ${userId} likes listing: ${listingId}`);
    res.end();
  })

};

