module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [{
        id: 1,
        productCode: 'd5dhf7fg8',
        description: 'Guitarra Gibson Les Paul',
        unit: 'R$',
        buyPrice: '3000',
        salePrice: '7000',
      },
      {
        id: 2,
        productCode: 'd5dhf7h8h9',
        description: 'Guitarra Fender Stratocaster',
        unit: 'R$',
        buyPrice: '2000',
        salePrice: '5000',
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
