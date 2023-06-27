module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('customer_addresses', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          address: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          city: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          state: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          pincode: {
              allowNull: false,
              type: Sequelize.STRING,
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
      return queryInterface.dropTable('customer_addresses');
  },
};
