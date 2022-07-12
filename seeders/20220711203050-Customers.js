module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Customers',
      [{
        id: 1,
        corporateName: 'Casa Terra',
        cnpj: '1234567890',
        address: 'R. Dr Afonso da silva, 345',
      },
      {
        id: 2,
        corporateName: 'Arabela Banda',
        cnpj: '1234567890',
        address: 'R. Loures das Flores, 567',
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
