'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('colors', [
      {
        id: 1,
        name:'blue',
        hex_value: '#0000FF',
      },
      {
        id: 2,
        name:'brown',
        hex_value: '#964B00',
      },
      {
        id: 3,
        name:'white',
        hex_value: '#fff',
      },
      {
        id: 4,
        name:'black',
        hex_value: '#000',
      },
      {
        id: 5,
        name:'red',
        hex_value: '#FF0000',
      },
      {
        id: 6,
        name:'yellow',
        hex_value: '#FFFF00',
      },
      {
        id: 7,
        name:'green',
        hex_value: '#008000',
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colors', null, {});
  }
};
