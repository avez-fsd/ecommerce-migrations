'use strict';

const tableName = 'images';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(tableName, [
      {
        id:1,
        sku: 'white_2342_Tshirt',
        thumbnail:1,
        images:'["https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13552828/2023/1/11/21404cf9-1da0-4184-8fe7-efe4a153a7cc1673429139873-Bewakoof-Men-White-Pure-Cotton-T-shirt-4601673429139210-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13552828/2023/1/11/7b0579d6-1201-4036-8a5d-07715dff94ee1673429139860-Bewakoof-Men-White-Pure-Cotton-T-shirt-4601673429139210-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13552828/2023/1/11/7ab81a0c-ecb1-4ec0-a975-c5ff589c4f1b1673429139847-Bewakoof-Men-White-Pure-Cotton-T-shirt-4601673429139210-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13552828/2023/1/11/2ce0aaf0-f680-45fd-9457-0552e5828cfb1673429139833-Bewakoof-Men-White-Pure-Cotton-T-shirt-4601673429139210-4.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13552828/2023/1/11/45ac8821-ad06-42af-83bd-0ccf8dbaf9231673429139819-Bewakoof-Men-White-Pure-Cotton-T-shirt-4601673429139210-5.jpg"]'
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
