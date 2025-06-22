'use strict';

const tableName = 'product_variant_images';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        id:1,
        product_id: 1,
        product_variant_id: 1,
        image_id:1,
        is_active: 1
      },
      {
        id:2,
        product_id: 1,
        product_variant_id: 2,
        image_id:1,
        is_active: 1
      },
      {
        id:3,
        product_id: 1,
        product_variant_id: 3,
        image_id:1,
        is_active: 1
      },
      {
        id:4,
        product_id: 1,
        product_variant_id: 4,
        image_id:1,
        is_active: 1
      },
      {
        id:5,
        product_id: 2,
        product_variant_id: 5,
        image_id:1,
        is_active: 1
      },
      {
        id:6,
        product_id: 2,
        product_variant_id: 6,
        image_id:1,
        is_active: 1
      },
      {
        id:7,
        product_id: 2,
        product_variant_id: 7,
        image_id:1,
        is_active: 1
      },
      {
        id:8,
        product_id: 2,
        product_variant_id: 8,
        image_id:1,
        is_active: 1
      },
      {
        id:9,
        product_id: 3,
        product_variant_id: 9,
        image_id:1,
        is_active: 1
      },
      {
        id:10,
        product_id: 3,
        product_variant_id: 10,
        image_id:1,
        is_active: 1
      },
      {
        id:11,
        product_id: 3,
        product_variant_id: 11,
        image_id:1,
        is_active: 1
      },
      {
        id:12,
        product_id: 3,
        product_variant_id: 12,
        image_id:1,
        is_active: 1
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
