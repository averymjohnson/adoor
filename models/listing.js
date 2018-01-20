'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('listing', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    picturePath: DataTypes.STRING,
    sellerEmail: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      Listing.belongsTo(models.Community, {
      foreignKey: "listingId",
      targetKey: "id"
    })
  });
  return Listing;
};