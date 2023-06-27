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
