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
          picturePath: "assets/img/test6.jpg",
          sellerEmail: "hello3@gmail.com"
      },
      {
          address: '2456 West Road',
          city: "Kansas City",
          zipcode: "66402",
          latitude: "35",
          longitude: "31",
          bedrooms: 5,
          bathrooms: 3,
          price: 100000,
          picturePath: "assets/img/test2.jpg",
          sellerEmail: "hello4@gmail.com"
      },
      {
          address: '2354 Main Street',
          city: "Kansas City",
          zipcode: "66302",
          latitude: "32",
          longitude: "34",
          bedrooms: 2,
          bathrooms: 1,
          price: 100000,
          picturePath: "assets/img/test3.jpg",
          sellerEmail: "hello5@gmail.com"
      },
      {
          address: '1335 Broadway',
          city: "Kansas City",
          zipcode: "66401",
          latitude: "33",
          longitude: "33",
          bedrooms: 4,
          bathrooms: 2,
          price: 150000,
          picturePath: "assets/img/test4.jpg",
          sellerEmail: "hello6@gmail.com"
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
          picturePath: "assets/img/test5.jpg",
          sellerEmail: "hello3@gmail.com"        
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('listings', null, {});
  }
};
