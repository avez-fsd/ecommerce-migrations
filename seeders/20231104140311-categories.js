'use strict';

const tableName = 'categories';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        id:1,
        name: 'Men',
        slug: 'men',
        is_active: 1
      },

      {
        id:2,
        name: 'Topwear',
        slug: 'men-topwear',
        parent_category_id: 1,
        is_active: 1
      },
      {
        id:3,
        name: 'Bottomwear',
        slug: 'men-bottomwear',
        parent_category_id: 1,
        is_active: 1
      },
      {
        id:4,
        name: 'T-shirts',
        slug: 'men-tshirts',
        parent_category_id: 2,
        is_active: 1
      },
      {
        id:5,
        name: 'Jackets',
        slug: 'men-jackets',
        parent_category_id: 2,
        is_active: 1
      },
      {
        id:6,
        name: 'Jeans',
        slug: 'men-jeans',
        parent_category_id: 3,
        is_active: 1
      },
      {
        id:7,
        name: 'Shorts',
        slug: 'men-shorts',
        parent_category_id: 3,
        is_active: 1
      },
      {
        id:8,
        name: 'Women',
        slug: 'women',
        is_active: 1
      },
      {
        id:9,
        name: 'Indian & Fusion Wear',
        slug: 'fusion-wear',
        parent_category_id: 8,
        is_active: 1
      },
      {
        id:10,
        name: 'Western Wear',
        slug: 'western-wear',
        parent_category_id: 8,
        is_active: 1
      },

      {
        id:11,
        name: 'Kurtas & Suits',
        slug: 'kurtas-suits',
        parent_category_id: 9,
        is_active: 1
      },
      {
        id:12,
        name: 'Sarees',
        slug: 'sarees',
        parent_category_id: 9,
        is_active: 1
      },
      {
        id:13,
        name: 'Dresses',
        slug: 'women-western-dresses',
        parent_category_id: 10,
        is_active: 1
      },
      {
        id:14,
        name: 'Tops',
        slug: 'women-western-tops',
        parent_category_id: 10,
        is_active: 1
      },
      {
        id:15,
        name: 'Kids',
        slug: 'kids',
        is_active: 1
      },

      {
        id:16,
        name: 'Boys Clothing',
        slug: 'boys-clothing',
        parent_category_id: 15,
        is_active: 1
      },
      {
        id:17,
        name: 'Girls Clothing',
        slug: 'girls-clothing',
        parent_category_id: 15,
        is_active: 1
      },

      {
        id:18,
        name: 'T-shirts',
        slug: 'boys-tshirt',
        parent_category_id: 16,
        is_active: 1
      },
      {
        id:19,
        name: 'Shorts',
        slug: 'boys-shorts',
        parent_category_id: 16,
        is_active: 1
      },
      {
        id:20,
        name: 'Dresses',
        slug: 'girls-dresses',
        parent_category_id: 17,
        is_active: 1
      },
      {
        id:21,
        name: 'Party wear',
        slug: 'girls-party-wear',
        parent_category_id: 17,
        is_active: 1
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
