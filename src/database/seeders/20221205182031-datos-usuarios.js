'use strict';
const bcrypt = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     return queryInterface.bulkInsert('usuario', [
      {
        nombre: "Admin",
        edad:30,
        dni:999999999,
        email:"admin@hospital.com",
        password:bcrypt.hashSync('password',10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Pedro",
        edad:30,
        dni:270356750,
        email:"pepe@pepe.com",
        password:bcrypt.hashSync('password',10),
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        nombre: "Juan",
        edad:30,
        dni:28956479,
        email:"juan@gmail.com",
        password:bcrypt.hashSync('password',10),
        created_at: new Date(),
        updated_at: new Date()

      }
    ])
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
