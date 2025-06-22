module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('carts', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          coupon_id: {
              allowNull: true,
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
      return queryInterface.dropTable('users');
  },
};
