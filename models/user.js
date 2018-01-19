'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
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
      }
    }
  });
  return user;
};