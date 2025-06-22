'use strict';

const tableName = 'products';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        id:1,
        name: 'Men Round Neck Pure Cotton T-shirt',
        description:'Teal dyed T-shirt, has a round neck, short sleeves, and 1 pocket',
        mrp:899,
        selling_price: 699,
        discount: 22.24, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1
      },
      {
        id:2,
        name: 'Men Solid Polo Collar Slim Fit T-shirt',
        description:'Grey melange Tshirt for men',
        mrp:999,
        selling_price: 499,
        discount: 50, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1
      },
      {
        id:3,
        name: 'Men Black Solid Denim Jacket',
        description:'Black solid denim jacket, has a spread collar, 4 pockets, button closures, long sleeves, straight hem',
        mrp:1999,
        selling_price: 699,
        discount: 65, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1
      },
      {
        id:4,
        name: 'Men Brown Suede Finish Bomber Jacket',
        description:'Brown suede finish bomber jacket, has a stand collar, 3 pockets ,has a zip closure, long sleeves, straight hemline, polyester lining',
        mrp:4599,
        selling_price: 1839,
        discount: 60, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
