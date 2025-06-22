'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sizes', [
      {
        id: 1,
        name:'XS',
      },
      {
        id: 2,
        name:'S',
      },
      {
        id: 3,
        name:'M',
      },
      {
        id: 4,
        name:'L',
      },
      {
        id: 5,
        name:'XL',
      },
      {
        id: 6,
        name:'XXL',
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sizes', null, {});
  }
};
