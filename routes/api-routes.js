
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
    db.Listing.create({
      address: req.address, 
      city: req.city, 
      zipcode: req.zip, 
      bedrooms: req.bed,
    	bathrooms: req.baths, 
      price: req.price,
      img: req.img
      })
    .then(function(dbListing){
        res.json(dbListing);
    		console.log("Listing Added to the database!");
    	});
    res.redirect('/matching');//this should be changed once to my-listings page.
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

