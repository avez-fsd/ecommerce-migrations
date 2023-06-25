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
          order_status_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
      },{
        timestamps:true
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
          queryInterface.addIndex('order_details', ['order_status_id'], {
              name: 'order_status_id_idx',
          });
      });
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('order_details');
  },
};
