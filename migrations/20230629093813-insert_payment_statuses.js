'use strict';

const tableName = 'payment_statuses';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        status: 'Pending',
      },
      {
        status: 'Success',
      },
      {
        status: 'Failed',
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
