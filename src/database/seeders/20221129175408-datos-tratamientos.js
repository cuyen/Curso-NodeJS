'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     return queryInterface.bulkInsert('tratamiento', [
      {
        medico_id: 1,
        paciente_id: 1,
        descripcion:"Consulta",
        fecha_atencion: new Date(),
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        medico_id: 2,
        paciente_id: 1,
        descripcion:"Consulta",
        fecha_atencion: new Date('2022-11-16T12:00:00'),
        created_at: new Date(),
        updated_at: new Date()
      },
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
