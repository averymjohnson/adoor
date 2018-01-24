'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(320)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      caresAboutSchools: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      caresAboutGroceryStores: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      caresAboutParks: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      caresAboutCrime: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      caresAboutHospitals: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      zipcode: {
        type: Sequelize.STRING(10)
      },
      budget: {
        type: Sequelize.DECIMAL(10,2)
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      bathrooms: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};