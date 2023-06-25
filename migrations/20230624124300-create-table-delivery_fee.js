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
      },{
        timestamps:true
      })
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('delivery_fee');
  },
};
