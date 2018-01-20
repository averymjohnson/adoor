'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('communities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listingId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: "listing",
        referencesKey: "id"
        },
      hospitalsCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      crimesCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      parksCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      groceryStoresCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bestSchoolRating: {
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
    return queryInterface.dropTable('communities');
  }
};