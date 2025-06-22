'use strict';

const tableName = 'product_categories';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        id:1,
        product_id: 1,
        category_id: 1,
        is_active: 1
      },
      {
        id:2,
        product_id: 1,
        category_id: 2,
        is_active: 1
      },
      {
        id:3,
        product_id: 1,
        category_id: 4,
        is_active: 1
      },
      {
        id:4,
        product_id: 2,
        category_id: 1,
        is_active: 1
      },
      {
        id:5,
        product_id: 2,
        category_id: 2,
        is_active: 1
      },
      {
        id:6,
        product_id: 2,
        category_id: 4,
        is_active: 1
      },
      {
        id:7,
        product_id: 3,
        category_id: 1,
        is_active: 1
      },
      {
        id:8,
        product_id: 3,
        category_id: 2,
        is_active: 1
      },
      {
        id:9,
        product_id: 3,
        category_id: 5,
        is_active: 1
      },
      {
        id:10,
        product_id: 4,
        category_id: 1,
        is_active: 1
      },
      {
        id:11,
        product_id: 4,
        category_id: 2,
        is_active: 1
      },
      {
        id:12,
        product_id: 4,
        category_id: 5,
        is_active: 1
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
