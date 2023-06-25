module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('order_status_log', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          child_order_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          order_status_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          }
      },{
        timestamps:true
      })
      .then((_) => {
          queryInterface.addIndex('order_status_log', ['child_order_id'], {
              name: 'child_order_id_idx',
          });
      });
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('order_status_log');
  },
};
