module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('orders', {
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
          email: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          password: {
              allowNull: false,
              type: Sequelize.STRING,
          }
      },{
        timestamps:true
      })
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('orders');
  },
};
