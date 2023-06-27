module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('delivery_fees', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          min_amount: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          max_amount: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          amount: {
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
      return queryInterface.dropTable('delivery_fee');
  },
};
