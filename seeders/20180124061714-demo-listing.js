'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('listings', [{
          address: '1334 Acme Road',
          city: "Kansas City",
          zipcode: "66401",
          latitude: "32",
          longitude: "32",
          bedrooms: 6,
          bathrooms: 2,
          price: 150000,
          picturePath: "assets/img/test1.jpg",
          sellerEmail: "hello3@gmail.com"
      },
      {
          address: '223 Washington Ave',
          city: "Kansas City",
          zipcode: "66433",
          latitude: "273",
          longitude: "4",
          bedrooms: 2,
          bathrooms: 1,
          price: 33000,
          picturePath: "assets/img/test2.jpg",
          sellerEmail: "hello3@gmail.com"        
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('listings', null, {});
  }
};
