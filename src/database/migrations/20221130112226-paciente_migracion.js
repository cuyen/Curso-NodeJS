'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /*
    return Promise.all([
      queryInterface.addColumn('paciente','tel',{
        type:Sequelize.STRING,
        allowNull:true
      })
    ])*/
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.addAll()
  }
};
