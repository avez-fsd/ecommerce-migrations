'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payment_gateway_config', [
      {
        name: 'stripe',
        code: 'STRIPE',
        metadata: 'test', // This should be a JSON string, later changed to JSON object
        is_active: 1
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payment_gateway_config', null, {});
  }
};
