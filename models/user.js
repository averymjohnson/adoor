'use strict';
var bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {

  var User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    caresAboutSchools: DataTypes.BOOLEAN,
    caresAboutGroceryStores: DataTypes.BOOLEAN,
    caresAboutParks: DataTypes.BOOLEAN,
    caresAboutCrime: DataTypes.BOOLEAN,
    caresAboutHospitals: DataTypes.BOOLEAN,
    zipcode: DataTypes.STRING,
    budget: DataTypes.DECIMAL,
    sqft: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Match, {
          onDelete: "cascade"
        });

        function getAllUsers(){
          return User.findAll({
          });
        }

       function getUserByEmail(email){
          return User.findOne({
            where:{
              email: email
            }
          }); //end of query
        }//end of getUserByEmail function

        function getUserById(id){
          return User.findById(id); //end of query
        }//end of getUserByEmail function

        function createUser(user){
          user.passwordHash = bcrypt.hashSync(user.password);
          User.create({ email: user.email, password: user.passwordHash
          });//end of query
          console.log("New user created and inserted in User table");
        }//end of createUser function
      }
    }
  });
  return User;
};