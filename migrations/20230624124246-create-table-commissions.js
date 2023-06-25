module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('commissions', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          commission_percentage: {
            allowNull: false,
            type: Sequelize.INTEGER(3).UNSIGNED,
          }
      },{
        timestamps:true
      })
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('commissions');
  },
};
