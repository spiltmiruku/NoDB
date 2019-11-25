import React, { Component } from "react";
import axios from "axios";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      departureLocation: "",
      departureAirport: "",
      departureDate: "",
      departureTime: "",
      arrivalLocation: "",
      arrivalAirport: "",
      arrivalDate: "",
      arrivalTime: "",
      cabin: "",
      departureLocationAirports: [],
      arrivalLocationAirports: []
    };
    this.add = this.add.bind(this);
    this.handleAirportSearch = this.handleAirportSearch.bind(this);
  }

  handleAdd(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAirportSearch(location) {
    axios.get("/api/airports?name=" + this.state[location]).then(res => {
      console.log(res);
      this.setState({
        [`${location}Airports`]: res.data
      });
    });
  }

  add() {
    let flight = { ...this.state };
    console.log(flight)
    this.props.addFlight(flight);

    this.setState({
      departureLocation: "",
      departureAirport: "",
      departureLocationAirports: [],
      departureDate: "",
      departureTime: "",
      arrivalLocation: "",
      arrivalAirport: "",
      arrivalLocationAirports: [],
      arrivalDate: "",
      arrivalTime: "",
      cabin: ""
    });
  }

  render() {
    let departureLocationSelect = "";
    if (this.state.departureLocationAirports.length) {
      departureLocationSelect = (
        <select
          onChange={e => this.handleAdd(e)}
          name="departureAirport"
          id="departureAirport"
        >
          {this.state.departureLocationAirports.map(airport => (
            <option key={airport.code} value={airport.code}>
              {airport.code} - {airport.name}
            </option>
          ))}
        </select>
      );
    }

    let arrivalLocationSelect = "";
    if (this.state.arrivalLocationAirports.length) {
      arrivalLocationSelect = (
        <select
          onChange={e => this.handleAdd(e)}
          name="arrivalAirport"
          id="arrivalAirport"
        >
          {this.state.arrivalLocationAirports.map(airport => (
            <option key={airport.code} value={airport.code}>
              {airport.code} - {airport.name}
            </option>
          ))}
        </select>
      );
    }

    return (
      <div>
        {/* <UpcomingTrips getFlights={this.state.getFlights}/> */}
        <input
          onChange={e => this.handleAdd(e)}
          placeholder="Departing Airport"
          name="departureLocation"
          value={this.state.departureLocation}
          type="text"
        />

        <button
          onClick={() => this.handleAirportSearch("departureLocation")}
          name="departureSearch"
        >
          {" "}
          Search Airports{" "}
        </button>

        {departureLocationSelect}

        <input
          onChange={e => this.handleAdd(e)}
          placeholder="Departure Date"
          name="departureDate"
          value={this.state.departureDate}
          type="date"
        />

        <input
          onChange={e => this.handleAdd(e)}
          placeholder="Departure Time"
          name="departureTime"
          value={this.state.departureTime}
          type="time"
        />

        <input
          onChange={e => this.handleAdd(e)}
          placeholder="Arrival Airport"
          name="arrivalLocation"
          value={this.state.arrivalLocation}
          type="text"
        />

        <button
          onClick={() => this.handleAirportSearch("arrivalLocation")}
          name="arrivalSearch"
        >
          {" "}
          Search Airports{" "}
        </button>

        {arrivalLocationSelect}

        <input
          onChange={e => this.handleAdd(e)}
          placeholder="Arrival Date"
          name="arrivalDate"
          value={this.state.arrivalDate}
          type="date"
        />

        <input
          onChange={e => this.handleAdd(e)}
          placeholder="Arrival Time"
          name="arrivalTime"
          value={this.state.arrivalTime}
          type="time"
        />

        <input
          onChange={e => this.handleAdd(e)}
          placeholder="Cabin Class"
          name="cabin"
          value={this.state.cabin}
          type="text"
        />

        <button className="addTrip" onClick={() => this.add()}>
          {" "}
          Add Trip{" "}
        </button>
      </div>
    );
  }
}

export default MainPage;
