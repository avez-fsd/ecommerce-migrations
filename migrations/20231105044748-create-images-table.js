module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('images', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },

          sku: {
              allowNull: false,
              type: Sequelize.STRING,
          },

          thumbnail: {
              allowNull: false,
              type: Sequelize.INTEGER(2).UNSIGNED,
          },

          images: {
              allowNull: false,
              type: Sequelize.JSON,
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
      return queryInterface.dropTable('images');
  },
};
