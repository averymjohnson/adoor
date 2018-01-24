'use strict';


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
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      
      }
    }
  });
  return User;
};