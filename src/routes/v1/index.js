const express = require("express");
const citycontroller = require("../../controllers/city-controller");
const flightcontroller = require("../../controllers/flight-controller");
const airportcontroller = require("../../controllers/airport-controller");
const { flightMiddlewares } = require("../../middlewares/index");

const router = express.Router();
router.post("/city", citycontroller.create);
router.get("/city/:id", citycontroller.get);
router.delete("/city/:id", citycontroller.destroy);
router.patch("/city/:id", citycontroller.update);
router.get("/city", citycontroller.getall);

router.post(
  "/flights",
  flightMiddlewares.validateCreateflight,
  flightcontroller.create
);
router.get("/flights", flightcontroller.getall);
router.get("/flights/:id", flightcontroller.get);
router.patch("/flights/:id", flightcontroller.update);
router.delete("/flights/:id", flightcontroller.destroy);

router.post("/airports", airportcontroller.create);
module.exports = router;
