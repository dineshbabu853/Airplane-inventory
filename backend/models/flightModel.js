const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightsSchema = new Schema(
  {
    flightId: { type: Number, required: true },
    fuelCapacity: { type: Number, required: true },
    route: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    duration: { type: String, required: true },
    time: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model("Flight", flightsSchema);

module.exports = Flight;
