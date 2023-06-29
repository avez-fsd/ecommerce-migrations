module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('payments', {
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
          payment_type: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          payment_reference_id: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          amount: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },
          commission_percentage: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },
          platform_commission: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },
          transfer_amount: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },
          payment_status_id: {
              allowNull: false,
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
        timestamps:true
      })
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('payments');
  },
};
