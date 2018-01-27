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
    },
    // 
    {
      listingId: 6,
      hospitalsCount: 1,
      crimesCount: 24,
      parksCount: 3,
      groceryStoresCount: 1,
      bestSchoolRating: 7
    },
    {
      listingId: 7,
      hospitalsCount: 4,
      crimesCount: 120,
      parksCount: 6,
      groceryStoresCount: 3,
      bestSchoolRating: 2
    },
    {
      listingId: 8,
      hospitalsCount: 4,
      crimesCount: 50,
      parksCount: 1,
      groceryStoresCount: 5,
      bestSchoolRating: 5
    },
    {
      listingId: 9,
      hospitalsCount: 3,
      crimesCount: 30,
      parksCount: 6,
      groceryStoresCount: 2,
      bestSchoolRating: 8
    },
    {
      listingId: 10,
      hospitalsCount: 4,
      crimesCount: 12,
      parksCount: 8,
      groceryStoresCount: 1,
      bestSchoolRating: 6
    },
    {
      listingId: 11,
      hospitalsCount: 1,
      crimesCount: 43,
      parksCount: 3,
      groceryStoresCount: 3,
      bestSchoolRating: 6
    },
    {
      listingId: 12,
      hospitalsCount: 1,
      crimesCount: 32,
      parksCount: 5,
      groceryStoresCount: 1,
      bestSchoolRating: 2
    },
    {
      listingId: 13,
      hospitalsCount: 2,
      crimesCount: 8,
      parksCount: 1,
      groceryStoresCount: 4,
      bestSchoolRating: 4
    },
    {
      listingId: 14,
      hospitalsCount: 2,
      crimesCount: 200,
      parksCount: 1,
      groceryStoresCount: 1,
      bestSchoolRating: 1
    },
    {
      listingId: 15,
      hospitalsCount: 5,
      crimesCount: 5,
      parksCount: 5,
      groceryStoresCount: 5,
      bestSchoolRating: 8
    },
    {
      listingId: 16,
      hospitalsCount: 3,
      crimesCount: 65,
      parksCount: 4,
      groceryStoresCount: 4,
      bestSchoolRating: 7
    },
    {
      listingId: 17,
      hospitalsCount: 1,
      crimesCount: 12,
      parksCount: 5,
      groceryStoresCount: 3,
      bestSchoolRating: 10
    },
    {
      listingId: 18,
      hospitalsCount: 4,
      crimesCount: 78,
      parksCount: 1,
      groceryStoresCount: 6,
      bestSchoolRating: 3
    },
    {
      listingId: 19,
      hospitalsCount: 1,
      crimesCount: 99,
      parksCount: 3,
      groceryStoresCount: 2,
      bestSchoolRating: 6
    },
    {
      listingId: 20,
      hospitalsCount: 5,
      crimesCount: 23,
      parksCount: 1,
      groceryStoresCount: 2,
      bestSchoolRating: 5
    },
    {
      listingId: 21,
      hospitalsCount: 4,
      crimesCount: 130,
      parksCount: 3,
      groceryStoresCount: 5,
      bestSchoolRating: 1
    },
    {
      listingId: 22,
      hospitalsCount: 2,
      crimesCount: 44,
      parksCount: 3,
      groceryStoresCount: 2,
      bestSchoolRating: 6
    },
    {
      listingId: 23,
      hospitalsCount: 4,
      crimesCount: 11,
      parksCount: 3,
      groceryStoresCount: 2,
      bestSchoolRating: 5
    },
    {
      listingId: 24,
      hospitalsCount: 4,
      crimesCount: 110,
      parksCount: 4,
      groceryStoresCount: 8,
      bestSchoolRating: 4
    },
    {
      listingId: 25,
      hospitalsCount: 5,
      crimesCount: 22,
      parksCount: 2,
      groceryStoresCount: 2,
      bestSchoolRating: 4
    },
    {
      listingId: 26,
      hospitalsCount: 5,
      crimesCount: 18,
      parksCount: 1,
      groceryStoresCount: 1,
      bestSchoolRating: 1
    },
    {
      listingId: 27,
      hospitalsCount: 1,
      crimesCount: 57,
      parksCount: 3,
      groceryStoresCount: 4,
      bestSchoolRating: 1
    },
    {
      listingId: 28,
      hospitalsCount: 5,
      crimesCount: 36,
      parksCount: 7,
      groceryStoresCount: 2,
      bestSchoolRating: 8
    },
    {
      listingId: 29,
      hospitalsCount: 3,
      crimesCount: 41,
      parksCount: 5,
      groceryStoresCount: 1,
      bestSchoolRating: 2
    },
    {
      listingId: 30,
      hospitalsCount: 3,
      crimesCount: 130,
      parksCount: 4,
      groceryStoresCount: 2,
      bestSchoolRating: 10
    },
    {
      listingId: 31,
      hospitalsCount: 1,
      crimesCount: 11,
      parksCount: 1,
      groceryStoresCount: 1,
      bestSchoolRating: 3
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('communities', null, {});
  }
};
