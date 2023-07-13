'use strict';

const tableName = 'products';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'Polo T-shirt',
        mrp:200,
        selling_price: 100,
        discount: 50,
        weight: 100, // gram
        category_id: 1,
        stock: 12,
        is_active: 1
      },
      {
        name: 'Levis T-shirt',
        mrp:200,
        selling_price: 100,
        discount: 50,
        weight: 100,
        category_id: 1,
        stock: 12,
        is_active: 1
      },
      {
        name: 'Kids T-shirt',
        mrp:200,
        selling_price: 100,
        discount: 50,
        weight: 100,
        category_id: 1,
        stock: 12,
        is_active: 1
      },
      {
        name: 'Women T-shirt',
        mrp:200,
        selling_price: 100,
        discount: 50,
        weight: 100,
        category_id: 1,
        stock: 12,
        is_active: 1
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
