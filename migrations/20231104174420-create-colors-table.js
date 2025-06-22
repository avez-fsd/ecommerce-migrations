module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('colors', {
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

          hex_value: {
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
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('colors');
  },
};
