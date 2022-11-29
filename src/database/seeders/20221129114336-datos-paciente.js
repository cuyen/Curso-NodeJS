'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     return queryInterface.bulkInsert('paciente', [
        {
          nombre: "Juana",
          apellido: "Rodriguez",
          dni: 270356745,
          direccion: "Av 7 Nro334",
          created_at: new Date(),
          updated_at: new Date()

        },
        {
          nombre: "Fernando",
          apellido: "Berni",
          dni: 280356745,
          direccion: "Av 9 Nro 567",
          created_at: new Date(),
          updated_at: new Date()

        },
        {
          nombre: "Alejandra",
          apellido: "Calo",
          dni: 270356745,
          direccion: "Calle 11 Nro 1234",
          created_at: new Date(),
          updated_at: new Date()

        },
        {
          nombre: "Laura",
          apellido: "Piran",
          dni: 270358545,
          direccion: "Calle 6 Nro 786",
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
