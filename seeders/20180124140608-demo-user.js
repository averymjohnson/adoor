'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: "John",
      lastName: "Smith",
      email: "jsmith@email.com",
      password: "password123",
      caresAboutSchools: 0,
      caresAboutGroceryStores: 0,
      caresAboutParks: 0,
      caresAboutCrime: 0,
      caresAboutHospitals: 0
    },
    {
      firstName: "Mike",
      lastName: "Jones",
      email: "WhoIsMikeJones@gmail.com",
      password: "backthen",
      caresAboutSchools: 1,
      caresAboutGroceryStores: 1,
      caresAboutParks: 1,
      caresAboutCrime: 1,
      caresAboutHospitals: 1
    },
    {
      firstName: "Tom",
      lastName: "Brady",
      email: "Goat@gamil.com",
      password: "thegreatest",
      caresAboutSchools: 0,
      caresAboutGroceryStores: 1,
      caresAboutParks: 0,
      caresAboutCrime: 0,
      caresAboutHospitals: 1
    },
    {
      firstName: "Danny",
      lastName: "Duffy",
      email: "foreverRoyal@gmail.com",
      password: "kcforever@gmail.com",
      caresAboutSchools: 0,
      caresAboutGroceryStores: 0,
      caresAboutParks: 1,
      caresAboutCrime: 0,
      caresAboutHospitals: 0
    },
    {
      firstName: "Steven",
      lastName: "Glansburg",
      email: "aloneatlunch@email.com",
      password: "superbad",
      caresAboutSchools: 0,
      caresAboutGroceryStores: 0,
      caresAboutParks: 0,
      caresAboutCrime: 1,
      caresAboutHospitals: 0
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
