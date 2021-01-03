import React, { Component } from "react";
import axios from "axios";

class EditFlight extends Component {
  constructor(props) {
    super();
    this.state = {
      flightId: 0,
      fuelCapacity: 0,
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

  componentDidMount() {
    axios
      .get(
        "https://airplane-backend.herokuapp.com/flights/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          flightId: res.data.flightId,
          fuelCapacity: res.data.fuelCapacity,
          route: res.data.route,
          origin: res.data.origin,
          destination: res.data.destination,
          duration: res.data.duration,
          time: res.data.time,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
  async onSubmit(e) {
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

    await axios
      .post(
        "https://airplane-backend.herokuapp.com/flights/update/" +
          this.props.match.params.id,
        flight
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="container">
        <h3>Edit Flight Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>FlightId: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.flightId}
              onChange={this.onChangeFlightId}
            />
          </div>
          <div className="form-group">
            <label>FuelCapacity: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.fuelCapacity}
              onChange={this.onChangeFuelCapacity}
            />
          </div>
          <div className="form-group">
            <label>Route: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.route}
              onChange={this.onChangeRoute}
            />
          </div>
          <div className="form-group">
            <label>Origin: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.origin}
              onChange={this.onChangeOrigin}
            />
          </div>
          <div className="form-group">
            <label>Destination: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.destination}
              onChange={this.onChangeDestination}
            />
          </div>
          <div className="form-group">
            <label>Duration: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Time: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.time}
              onChange={this.onChangeTime}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Flight Details"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditFlight;
