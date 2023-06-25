module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('products', {
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
          category_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          stock: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          is_active: {
              allowNull: false,
              type: Sequelize.TINYINT(1),
          }
      },{
        timestamps:true
      })
      .then((_) => {
          queryInterface.addIndex('products', ['category_id'], {
              name: 'category_id_idx',
          });
      });
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('orders');
  },
};
