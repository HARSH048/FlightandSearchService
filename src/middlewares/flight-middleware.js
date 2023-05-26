const { ClientErrorCodes } = require("../utils/error-codes");
const validateCreateflight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneid ||
    !req.body.departureAirportid ||
    !req.body.arrivalAirportid ||
    !req.body.departuretime ||
    !req.body.arrivaltime ||
    !req.body.price
  ) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "invalid request body for create flight",
      error: "missing mandatory properties to create flight",
    });
  }
  next();
};

module.exports = {
  validateCreateflight,
};
