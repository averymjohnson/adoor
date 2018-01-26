'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('matches', [{
    userId: 1,
      listingId: 1
    },
    {
      userId: 1,
      listingId: 2
    },
    {
      userId: 1,
      listingId: 5
    },
    {
      userId: 2,
      listingId: 2
    },
    {
      userId: 2,
      listingId: 5
    },
    {
      userId: 2,
      listingId: 3
    },
    {
      userId: 3,
      listingId: 3
    },
    {
      userId: 3,
      listingId: 1
    },
    {
      userId: 3,
      listingId: 2
    },
    {
      userId: 4,
      listingId: 4
    },
    {
      userId: 4,
      listingId: 5
    },
    {
      userId: 4,
      listingId: 4
    },
    {
      userId: 5,
      listingId: 2
    },
    {
      userId: 3,
      listingId: 1
    },
    {
      userId: 2,
      listingId: 3
    },
    {
      userId: 5,
      listingId: 5
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('matches', null, {});
  }
};
