module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('orders', {
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
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          total_amount: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },
          total_delivery_fee: {
              allowNull: true,
              type: Sequelize.DECIMAL(12, 2),
          },
          order_status_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          payment_id: {
              allowNull: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
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
        initialAutoIncrement: 9000000
      })
      .then((_) => {
        queryInterface.addConstraint(
          'orders',
          {
            fields: ['order_no'],
            name: 'parent_order_no_idx',
            type: 'unique',
          },
        );
      });
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('orders');
  },
};
