
var db = require("../models");
var bcrypt = require('bcrypt-nodejs');
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');

module.exports = function(app) {

	// app.get("/api/users", function(req, res) {
		
	//   //req.passwordHash = bcrypt.hashSync(req.password);         
          
 //      // db.user.findOrCreate({where: {email: req.user.email} ,defaults: {firstName: req.user.firstName, lastName: req.user.lastName, password: req.passwordHash}})//.then(function(dbUser) {
 //      //   .spread((user, created) => {
 //      //       console.log(user.get({
 //      //       plain: true
 //      // }));
 //      // if(created === true){
 //      //   res.redirect('/survey');
 //      // }
 //      // else{
 //      // 	res.redirect('/matching');
 //      // }
 //      //localStorage.setItem("currentUserID", user.id);
 //      // console.log(user.id);
 //      // console.log("First Time Created??: " + created);
 //      // console.log("New user created and inserted in User table");
 //      // });
 //      res.send("Signed in");
 //  	});

 app.post("/api/signUpUser", function(req, res){
 	console.log("SIGN UP USER POST API METHOD HERE!!!");
 	console.log(req.body);
 	db.user.create({
 		firstName: req.body.firstName,
 		lastName: req.body.lastName,
 		email: req.body.email,
 		password: req.body.password
 	}).then(function(){
 		console.log("User added to the database");
 	});
 	res.redirect('/matching');
 });

  	// POST route for saving a new post
  app.post("/api/listing", function(req, res) {
    console.log(req.body);
    db.listing.create({
      address: req.address, 
      city: req.city, 
      zipcode: req.zip, 
      bedrooms: req.bed,
    	bathrooms: req.baths, 
      price: req.price,
      img: req.img
      })
    .then(function(dbListing){
        // res.json(dbListing);
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

//check if listing is a match
  app.post("/api/match/check", function(req, res) {
    var userId = localStorage.getItem('currentUserID');
    var listingId = req.body.listingId;
    var userObj;
    var community;
    var listing;
    var compatibilityScore = 0;

    console.log(`user: ${userId} likes listing: ${listingId}`);

    //function call block
    findCommunityInfo(listingId).then(function(info){
      community = info;
      return findUser(userId);
    }).then(function(user){
      userObj = user;
      return findListingInfo(listingId);
    }).then(function(listingInfo){
      listing = listingInfo;
      return checkForCommunityMatch(userObj, community);
    }).then(function(communityScore){
      console.log(`Your Community Score is: ${communityScore}`);
      compatibilityScore+= communityScore;
      return checkForLocationMatch(userObj, listing);
    }).then(function(locationScore){
      console.log(`Your Location Score is: ${locationScore}`);
      compatibilityScore+= locationScore;
      console.log(`Your total Compatibility Score is: ${compatibilityScore}`);
      if (compatibilityScore > 3) {
        createMatch(userId, listingId);
      }  

    }).catch(function(err) {
      console.log(err);
    });


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

      function findListingInfo(listingId) {
      return new Promise(function(resolve, reject){
          db.listing.findOne({
            where: {
              id: listingId
            }
          }).then(function(listingInfo) { 
            if (listingInfo !== undefined) {
              resolve(listing = listingInfo);
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
    
    function createMatch(userId, listingId) {
      db.match.create({
        userId: userId,
        listingId: listingId
      }).then(function(){
        res.json(listing);
      });
    }

    function checkForCommunityMatch(user, community) {
      //checks user preferences vs. the listing's community score
      var communityScore = 0;
      
      if (
        user.dataValues.caresAboutSchools === true && 
        community.dataValues.bestSchoolRating > 8) 
      {
        console.log("you like good schools");
        communityScore++;
      } if (
        user.dataValues.caresAboutGroceryStores === true && 
        community.dataValues.groceryStoresCount > 0)
      {
        console.log("you like close grocery stores");
        communityScore++;
      } if (
        user.dataValues.caresAboutParks === true &&
        community.dataValues.parksCount > 0)
      {
        console.log("you like parks nearby");
        communityScore++;
      } if (
        user.dataValues.caresAboutCrime === true &&
        community.dataValues.crimesCount < 30)
      {
        console.log("you care about safety");
        communityScore++;
      } if (
        user.dataValues.caresAboutHospitals === true &&
        community.dataValues.hospitalsCount > 0)
      {
        console.log("you care about accessible healthcare");
        communityScore++;
      }

      return communityScore;
    }

    function checkForLocationMatch(user, listing) {
      //checks user preferences vs. the listing's location information
      var locationScore = 0;
      
      if (
        user.dataValues.zipcode === 
        listing.dataValues.zipcode) 
      {
        console.log('zip code matches');
        locationScore++;
      } if (
        user.dataValues.budget >= 
        (listing.dataValues.price - (userObj.dataValues.budget * .2)) )
      {
        console.log('budget is affordable');
        locationScore++;
      } if (
        user.dataValues.bedrooms <=
        listing.dataValues.bedrooms)
      {
        console.log('enough bedrooms');
        locationScore++;
      } if (
        user.dataValues.bathrooms <=
        listing.dataValues.bathrooms)
      {
        console.log('enough bathrooms');
        locationScore++;
      } 
      return locationScore;
    }

    // res.end();
  })

//end of export

};

