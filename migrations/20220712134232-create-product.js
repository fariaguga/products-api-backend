'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      productCode: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      unit: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      buyPrice: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      salePrice: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
