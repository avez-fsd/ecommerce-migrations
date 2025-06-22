module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('cart_products', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          cart_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          product_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          product_variant_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          quantity: {
              allowNull: false,
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
      return queryInterface.dropTable('cart_products');
  },
};
