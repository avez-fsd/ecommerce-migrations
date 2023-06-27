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
      return queryInterface.dropTable('commissions');
  },
};
