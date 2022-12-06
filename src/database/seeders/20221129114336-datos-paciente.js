'use strict';
const models = require('../models/index');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    /*return Promise.all([
      models.paciente.findOrCreate(
        {
          where:{
            id:'1'
          },
          defaults:{
            nombre: "Juana E.",
          apellido: "Rodriguez",
          dni: 270356745,
          direccion: "Av 7 Nro334",
          created_at: new Date(),
          updated_at: new Date()
          }
        }
      )
    ])*/
    
     return queryInterface.bulkInsert('paciente', [
        {
          nombre: "Juana",
          apellido: "Rodriguez",
          dni: 270356745,
          direccion: "Av7Nro334",
          created_at: new Date(),
          updated_at: new Date()

        },
        {
          nombre: "Fernando",
          apellido: "Berni",
          dni: 270356746,
          direccion: "Av9Nro567",
          created_at: new Date(),
          updated_at: new Date()

        },
        {
          nombre: "Alejandra",
          apellido: "Calo",
          dni: 270356747,
          direccion: "Calle11Nro1234",
          created_at: new Date(),
          updated_at: new Date()

        },
        {
          nombre: "Laura",
          apellido: "Piran",
          dni: 270356748,
          direccion: "Calle6Nro786",
          created_at: new Date(),
          updated_at: new Date()

        },
        {
          nombre: "Pedro",
          apellido: "Dominguez",
          dni: 270356750,
          direccion: "Calle6Nro 782",
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
