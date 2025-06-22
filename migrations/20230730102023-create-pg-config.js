module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('payment_gateway_config', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          name: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          code: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          metadata: {
              allowNull: false,
              type: Sequelize.JSON,
          },
          is_active: {
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
      return queryInterface.dropTable('users');
  },
};
