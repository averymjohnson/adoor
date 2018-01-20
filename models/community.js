'use strict';
module.exports = (sequelize, DataTypes) => {
  var Community = sequelize.define('community', {
    listingId: DataTypes.INTEGER,
    hospitalsCount: DataTypes.INTEGER,
    crimesCount: DataTypes.INTEGER,
    parksCount: DataTypes.INTEGER,
    groceryStoresCount: DataTypes.INTEGER,
    bestSchoolRating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Community;
};