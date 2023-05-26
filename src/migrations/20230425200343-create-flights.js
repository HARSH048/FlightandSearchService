'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      airplaneid: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      departureAirportid: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      arrivalAirportid: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      arrivaltime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      departuretime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};