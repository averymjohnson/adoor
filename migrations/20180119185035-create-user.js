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
        type: Sequelize.STRING(32)
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
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      budget: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      sqft: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bedrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bathrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};