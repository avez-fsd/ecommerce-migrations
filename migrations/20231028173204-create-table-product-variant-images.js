module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('product_variant_images', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },

          product_id: {
              allowNull: false,
              type: Sequelize.STRING,
          },

          product_variant_id: {
              allowNull: false,
              type: Sequelize.STRING,
          },

          image_id: {
              allowNull: false,
              type: Sequelize.INTEGER(2).UNSIGNED,
          },

          is_active: {
              allowNull: false,
              type: Sequelize.BOOLEAN,
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
      return queryInterface.dropTable('product_variant_images');
  },
};
