const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('order_details', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          order_no: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          parent_order_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          product_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          product_variant_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          product_name: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          mrp: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },
          selling_price: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },
          discount: {
              allowNull: false,
              defaultValue: '0.00',
              type: Sequelize.DECIMAL(12, 2),
          },
          quantity: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          delivery_fee: {
              allowNull: true,
              defaultValue: '0.00',
              type: Sequelize.DECIMAL(12, 2),
          },
          total_price: {
              allowNull: true,
              type: Sequelize.DECIMAL(12, 2),
          },
          total_price: {
              allowNull: true,
              type: Sequelize.DECIMAL(12, 2),
          },
          shipping_address: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          shipping_city: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          shipping_state: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          shipping_pincode: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          shipping_weight: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          status: {
              allowNull: false,
              type: DataTypes.ENUM('NOT_CONFIRMED', 'CONFIRMED', 'CANCELLED', 'AUTO_CANCELLED', 'READY_TO_PICKUP', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED', 'FULL_FILLED')
          },
          created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
          },
          updated_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW'),
          }
      },{
        timestamps:true,
        initialAutoIncrement: 300000
      })
      .then((_) => {
        queryInterface.addConstraint(
          'order_details',
          {
            fields: ['order_no'],
            name: 'order_no_idx',
            type: 'unique',
          },
        );
      });
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('order_details');
  },
};
