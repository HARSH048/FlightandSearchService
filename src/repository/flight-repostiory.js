const { Flights } = require("../models/index");

class FlightRepository {
  async createflight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in repository");
      throw err;
    }
  }

  async updateflight(flightid, data) {
    try {
      const flight = await Flights.update(data, {
        where: {
          id: flightid,
        },
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in repository");
      throw err;
    }
  }

  async getflight(flightid) {
    try {
      const flight = await Flights.findByPk(flightid);
      return flight;
    } catch (error) {
      console.log("something went wrong in repository");
      throw err;
    }
  }

  async deleteflight(flightid) {
    try {
      const flight = await Flights.destroy({
        where: {
          id: flightid,
        },
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in repository");
      throw err;
    }
  }

  async getAllflight() {
    try {
      const flight = await Flights.findAll();
      return flight;
    } catch (error) {
      console.log("something went wrong in repository");
      throw err;
    }
  }
}

module.exports = FlightRepository;
