import React, { Component } from "react";
import axios from "axios";

class CreateFlight extends Component {
  constructor(props) {
    super();
    this.state = {
      flightId: undefined,
      fuelCapacity: undefined,
      route: "",
      origin: "",
      destination: "",
      duration: "",
      time: "",
    };
    this.onChangeFlightId = this.onChangeFlightId.bind(this);
    this.onChangeFuelCapacity = this.onChangeFuelCapacity.bind(this);
    this.onChangeRoute = this.onChangeRoute.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangeDestination = this.onChangeDestination.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeFlightId(e) {
    this.setState({ flightId: e.target.value });
  }
  onChangeFuelCapacity(e) {
    this.setState({ fuelCapacity: e.target.value });
  }
  onChangeRoute(e) {
    this.setState({ route: e.target.value });
  }
  onChangeOrigin(e) {
    this.setState({ origin: e.target.value });
  }
  onChangeDestination(e) {
    this.setState({ destination: e.target.value });
  }
  onChangeDuration(e) {
    this.setState({ duration: e.target.value });
  }
  onChangeTime(e) {
    this.setState({ time: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const flight = {
      flightId: this.state.flightId,
      fuelCapacity: this.state.fuelCapacity,
      route: this.state.route,
      origin: this.state.origin,
      destination: this.state.destination,
      duration: this.state.duration,
      time: this.state.time,
    };

    console.log(flight);

    axios
      .post("http://localhost:5000/flights/add", flight)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="container">
        <h3>Add New Flight</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>FlightId: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.flightId}
              onChange={this.onChangeFlightId}
              placeholder="Enter Flight Number"
            />
          </div>
          <div className="form-group">
            <label>FuelCapacity: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.fuelCapacity}
              onChange={this.onChangeFuelCapacity}
              placeholder="Enter Fuel Capacity in Litres"
            />
          </div>
          <div className="form-group">
            <label>Route: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.route}
              onChange={this.onChangeRoute}
              placeholder="Enter the Route"
            />
          </div>
          <div className="form-group">
            <label>Origin: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.origin}
              onChange={this.onChangeOrigin}
              placeholder="Enter Origin"
            />
          </div>
          <div className="form-group">
            <label>Destination: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.destination}
              onChange={this.onChangeDestination}
              placeholder="Enter Destination"
            />
          </div>
          <div className="form-group">
            <label>Duration: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              placeholder="Enter the travel Duration"
            />
          </div>
          <div className="form-group">
            <label>Time: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.time}
              onChange={this.onChangeTime}
              placeholder="Enter the Flight Departure time"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add New Flight"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateFlight;
