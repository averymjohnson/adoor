'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('communities', [{
      listingId: 1,
      hospitalsCount: 2,
      crimesCount: 13,
      parksCount: 3,
      groceryStoresCount: 0,
      bestSchoolRating: 7
    },
    {
      listingId: 2,
      hospitalsCount: 0,
      crimesCount: 60,
      parksCount: 2,
      groceryStoresCount: 3,
      bestSchoolRating: 9
    },
    {
      listingId: 3,
      hospitalsCount: 1,
      crimesCount: 30,
      parksCount: 1,
      groceryStoresCount: 2,
      bestSchoolRating: 8
    },
    {
      listingId: 4,
      hospitalsCount: 3,
      crimesCount: 130,
      parksCount: 5,
      groceryStoresCount: 1,
      bestSchoolRating: 2
    },
    {
      listingId: 5,
      hospitalsCount: 1,
      crimesCount: 90,
      parksCount: 0,
      groceryStoresCount: 2,
      bestSchoolRating: 10
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('communities', null, {});
  }
};
