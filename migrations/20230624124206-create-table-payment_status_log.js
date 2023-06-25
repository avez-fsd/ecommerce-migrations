module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('payment_status_log', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          payment_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          payment_status_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          }
      },{
        timestamps:true
      })
      .then((_) => {
          queryInterface.addIndex('payment_status_log', ['payment_id'], {
              name: 'payment_id_idx',
          });
      });
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('payment_status_log');
  },
};
