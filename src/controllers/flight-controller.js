const { SuccessCodes } = require("../utils/error-codes");
const { Flightservice } = require("../services/index");

const flightservice = new Flightservice();

const create = async (req, res) => {
  try {
    const flightRequestdata = {
      flightNumber: req.body.flightNumber,
      airplaneid: req.body.airplaneid,
      departureAirportid: req.body.departureAirportid,
      arrivalAirportid: req.body.arrivalAirportid,
      departuretime: req.body.departuretime,
      arrivaltime: req.body.arrivaltime,
      price: req.body.price,
    };
    const flight = await flightservice.createflight(flightRequestdata);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "successfully created the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a flight",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    await flightservice.deleteflight(req.params.id);
    return res.status(SuccessCodes.CREATED).json({
      data: {},
      success: true,
      message: "successfully delete the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to delete a flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightservice.getflight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "successfully get the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch a flight",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const flight = await flightservice.updateflight(req.params.id, req.body);
    return res.status(600).json({
      data: flight,
      success: true,
      message: "successfully update the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to update a flight",
      err: error,
    });
  }
};

const getall = async (req, res) => {
  try {
    const flight = await flightservice.getAllflight();
    return res.status(400).json({
      data: flight,
      success: true,
      message: "successfully getall the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to delete a flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  getall,
  update,
  destroy,
};
