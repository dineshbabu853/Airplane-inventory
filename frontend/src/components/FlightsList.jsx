import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Flight = (props) => (
  <tr>
    <td>{props.flight.flightId}</td>
    <td>{props.flight.fuelCapacity}</td>
    <td>{props.flight.route}</td>
    <td>{props.flight.origin}</td>
    <td>{props.flight.destination}</td>
    <td>{props.flight.duration}</td>
    <td>{props.flight.time}</td>

    <td>
      <button className="btn btn-secondary">
        <Link to={"/edit/" + props.flight._id} style={{ color: "white" }}>
          Edit
        </Link>
      </button>{" "}
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteFlight(props.flight._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

class FlightsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
    };

    this.deleteFlight = this.deleteFlight.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/flights/")
      .then((res) => {
        this.setState({ flights: res.data });
      })
      .catch((error) => console.log(error));
  }

  deleteFlight(id) {
    axios
      .delete("http://localhost:5000/flights/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      flights: this.state.flights.filter((el) => el._id !== id),
    });
  }

  flightsList() {
    return this.state.flights.map((currentflight) => {
      return (
        <Flight
          flight={currentflight}
          deleteFlight={this.deleteFlight}
          key={currentflight._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Available Flights</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>FlightId</th>
              <th>FuelCapacity</th>
              <th>Route</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Duration</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{this.flightsList()}</tbody>
        </table>
      </div>
    );
  }
}

export default FlightsList;
