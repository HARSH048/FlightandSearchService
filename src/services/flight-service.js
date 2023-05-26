const { FlightRepository, AirplaneRepository } = require("../repository/index");

class Flightservice {
  constructor() {
    this.airplanerepository = new AirplaneRepository();
    this.flightrepository = new FlightRepository();
  }

  async createflight(data) {
    try {
      const airplane = await this.airplanerepository.getAirplane(
        data.airplaneid
      );
      const flight = await this.flightrepository.createflight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("something went wron on service layer");
      throw error;
    }
  }

  async deleteflight(id) {
    try {
      await this.flightrepository.deleteflight(id);
    } catch (error) {
      console.log("something went wron on service layer");
      throw error;
    }
  }

  async updateflight(id, data) {
    try {
      const flight = await this.flightrepository.updateflight(id, data);
      return flight;
    } catch (error) {
      console.log("something went wron on service layer");
      throw error;
    }
  }

  async getflight(id) {
    try {
      const flight = await this.flightrepository.getflight(id);
      return flight;
    } catch (error) {
      console.log("something went wron on service layer");
      throw error;
    }
  }

  async getAllflight() {
    try {
      const flight = await this.flightrepository.getAllflight();
      return flight;
    } catch (error) {
      console.log("something went wron on service layer");
      throw error;
    }
  }
}

module.exports = Flightservice;

// flightNumber,
// airplaneid,
// departureAirportid,
// arrivalAirportid,
// departuretime,
// arrivaltime,
// price
// totalseats->airplane
