module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('order_statuses', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          status: {
              allowNull: false,
              type: Sequelize.STRING,
          }
      },{
        timestamps:true
      })
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('order_statuses');
  },
};
