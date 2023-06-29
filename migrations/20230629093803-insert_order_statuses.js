'use strict';

const tableName = 'order_statuses';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        status: 'Not confirmed',
      },
      {
        status: 'Confirmed',
      },
      {
        status: 'Cancelled',
      },
      {
        status: 'Auto Cancelled',
      },
      {
        status: 'Ready to pickup',
      },
      {
        status: 'Out for delivery',
      },
      {
        status: 'Delivered',
      },
      {
        status: 'Full filled',
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
