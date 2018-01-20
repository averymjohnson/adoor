'use strict';
module.exports = (sequelize, DataTypes) => {
  var match = sequelize.define('match', {
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return match;
};