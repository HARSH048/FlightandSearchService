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

    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber:'BOEING 737',
        capacity:300,
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        modelNumber:'AIRBUS 320',
        capacity:320,
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        modelNumber:'BOEING 777',
        capacity:340,
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        modelNumber:'BOEING 747',
        capacity:200,
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        modelNumber:'AIRBUS A330',
        capacity:150,
        createdAt: new Date(),
        updatedAt:new Date(),
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
