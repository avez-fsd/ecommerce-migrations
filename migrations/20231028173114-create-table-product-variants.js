const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('product_variants', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },

          product_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },

          name: {
            allowNull: false,
            type: Sequelize.STRING,
          },

          color_id: {
            allowNull: false,
            type: Sequelize.INTEGER(11).UNSIGNED,
          },
          
          size_id: {
            allowNull: false,
            type: Sequelize.INTEGER(11).UNSIGNED,
          },

          mrp: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },

          selling_price: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },

          discount: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },

          weight: {
              allowNull: false,
              type: Sequelize.DECIMAL(12, 2),
          },

          stock: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },

          is_active: {
              allowNull: false,
              type: Sequelize.TINYINT(1),
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

      });
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('product_variants');
  },
};
