'use strict';

const tableName = 'product_variants';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        id:1,
        product_id: 1,
        name: 'Men Teal Blue Dyed Round Neck Pure Cotton T-shirt',
        mrp:899,
        selling_price: 699,
        discount: 22.24, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:1, 
        size_id:1
      },
      {
        id:2,
        product_id: 1,
        name: 'Men Teal Blue Dyed Round Neck Pure Cotton T-shirt',
        mrp:899,
        selling_price: 699,
        discount: 22.24, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:1,
        size_id:2
      },
      {
        id:3,
        product_id: 1,
        name: 'The Lifestyle Co Men Mauve Dyed Round Neck Pure Cotton T-shirt',
        mrp:899,
        selling_price: 699,
        discount: 22.24, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:2,
        size_id:1
      },
      {
        id:4,
        product_id: 1,
        name: 'The Lifestyle Co Men Mauve Dyed Round Neck Pure Cotton T-shirt',
        mrp:899,
        selling_price: 699,
        discount: 22.24, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:2,
        size_id:2
      },
      {
        id:5,
        product_id: 2,
        name: 'Men Solid Polo Collar Slim Fit T-shirt',
        mrp:999,
        selling_price: 499,
        discount: 50, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:3,
        size_id:1
      },
      {
        id:6,
        product_id: 2,
        name: 'Men Solid Polo Collar Slim Fit T-shirt',
        mrp:999,
        selling_price: 499,
        discount: 50, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:3,
        size_id:2
      },
      {
        id:7,
        product_id: 2,
        name: 'Men Solid Polo Collar Slim Fit T-shirt',
        mrp:999,
        selling_price: 499,
        discount: 50, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:4,
        size_id:1
      },
      {
        id:8,
        product_id: 2,
        name: 'Men Solid Polo Collar Slim Fit T-shirt',
        mrp:999,
        selling_price: 499,
        discount: 50, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:4,
        size_id:2
      },
      {
        id:9,
        product_id: 3,
        name: 'Men Black Solid Denim Jacket',
        mrp:1999,
        selling_price: 699,
        discount: 65, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:5,
        size_id:1
      },
      {
        id:10,
        product_id: 3,
        name: 'Men Black Solid Denim Jacket',
        mrp:1999,
        selling_price: 699,
        discount: 65, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:5,
        size_id:2
      },
      {
        id:11,
        product_id: 3,
        name: 'Men Charcoal Grey Solid Denim Jacket',
        mrp:1999,
        selling_price: 699,
        discount: 65, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:6,
        size_id:1
      },
      {
        id:12,
        product_id: 3,
        name: 'Men Charcoal Grey Solid Denim Jacket',
        mrp:1999,
        selling_price: 699,
        discount: 65, // percentage
        weight: 100, // gram
        stock: 12,
        is_active: 1,
        color_id:6,
        size_id:2
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
