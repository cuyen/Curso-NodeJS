'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert('medico', [
      {
        matricula: 'AXWD12443',
        nombre: 'Pepe',
        apellido:'Meroni',
        especialidad:'clinica',
        dni:'28956478',
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        matricula: 'AJHT12498',
        nombre: 'Juan',
        apellido:'Perez',
        especialidad:'Pediatra',
        dni:'28956478',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        matricula: 'BCDWD12443',
        nombre: 'Alberto',
        apellido:'Consetoni',
        especialidad:'Cirujano',
        dni:'29956478',
        created_at: new Date(),
        updated_at: new Date()

      }
  ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
