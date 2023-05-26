'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name:'SAFDARJUNT AIRPORT',
        createdAt: new Date(),
        updatedAt:new Date(),
        cityid:4
      },
      {
        name:'PALAM AIRPORT',
        createdAt: new Date(),
        updatedAt:new Date(),
        cityid:6
      },
      {
        name:'INDIRA GANDHI INTERNATIONAL AIRPORT ',
        createdAt: new Date(),
        updatedAt:new Date(),
        cityid:4
      },
      {
        name:'IGI',
        createdAt: new Date(),
        updatedAt:new Date(),
        cityid:7
      }
    ],{});
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
