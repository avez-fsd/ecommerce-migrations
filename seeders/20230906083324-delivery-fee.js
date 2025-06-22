'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('delivery_fees', [
      {
        min_amount: 0,
        max_amount: 10000,
        amount: 20
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('delivery_fees', null, {});
  }
};
