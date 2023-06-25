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
          }
      },{
        timestamps:true
      })
      .then((_) => {
          queryInterface.addIndex('orders', ['order_no'], {
              name: 'order_no_idx',
          });
      });
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('orders');
  },
};
