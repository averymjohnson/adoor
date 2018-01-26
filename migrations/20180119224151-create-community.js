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
        references: {
          model: "listings",
          key: "id"
        }
        },
      hospitalsCount: {
        type: Sequelize.INTEGER
      },
      crimesCount: {
        type: Sequelize.INTEGER
      },
      parksCount: {
        type: Sequelize.INTEGER
      },
      groceryStoresCount: {
        type: Sequelize.INTEGER
      },
      bestSchoolRating: {
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
    return queryInterface.dropTable('communities');
  }
};