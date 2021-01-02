const router = require("express").Router();
let Flight = require("../models/flightModel");

router.route("/").get((req, res) => {
  Flight.find()
    .then((flights) => res.json(flights))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log("req: ", req);
  const flightId = Number(req.body.flightId);
  const fuelCapacity = Number(req.body.fuelCapacity);
  const route = req.body.route;
  const origin = req.body.origin;
  const destination = req.body.destination;
  const duration = req.body.duration;
  const time = req.body.time;
  const newFlight = new Flight({
    flightId,
    fuelCapacity,
    route,
    origin,
    destination,
    duration,
    time,
  });

  newFlight
    .save()
    .then(() => res.json("Flight added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Flight.findById(req.params.id)
    .then((flight) => res.json(flight))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Flight.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json("Flight deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Flight.findById(req.params.id)
    .then((flight) => {
      flight.flightId = Number(req.body.flightId);
      flight.fuelCapacity = Number(req.body.fuelCapacity);
      flight.route = req.body.route;
      flight.origin = req.body.origin;
      flight.destination = req.body.destination;
      flight.duration = req.body.duration;
      flight.time = req.body.time;

      flight
        .save()
        .then(() => res.json("Flight updated !"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
