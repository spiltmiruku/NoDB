import React, { Component } from "react";
import "../App.css";

class FlightCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departureAirport: props.obj.departureAirport,
      departureDate: props.obj.departureDate,
      departureTime: props.obj.departureTime,
      arrivalAirport: props.obj.arrivalAirport,
      arrivalDate: props.obj.arrivalDate,
      arrivalTime: props.obj.arrivalTime,
      cabin: props.obj.cabin,
      isEditing: false
    };
  }


  handleChange = (e) =>  {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  editFlight = (id) => {
      let flight = {...this.state}
      delete flight.isEditing
    this.props.editFlight(id, flight)
    this.setState({
      isEditing: false
    });
  };

  render() {
      console.log(this.state)
    let {
      departureAirport,
      departureDate,
      departureTime,
      arrivalAirport,
      arrivalDate,
      arrivalTime,
      cabin
    } = this.state;
    return (
      <div>
        {this.state.isEditing ? (
          <div>
            <input
              onChange={this.handleChange}
              name="departureAirport"
              value={departureAirport}
              type=""
            />
            <input
              onChange={this.handleChange}
              name="departureDate"
              value={departureDate}
              type=""
            />
            <input
              onChange={this.handleChange}
              name="departureTime"
              value={departureTime}
              type=""
            />
            <input
              onChange={this.handleChange}
              name="arrivalAirport"
              value={arrivalAirport}
              type=""
            />
            <input
              onChange={this.handleChange}
              name="arrivalDate"
              value={arrivalDate}
              type=""
            />
            <input
              onChange={this.handleChange}
              name="arrivalTime"
              value={arrivalTime}
              type=""
            />
            <input
              onChange={this.handleChange}
              name="cabin"
              value={cabin}
              type=""
            />
            <button onClick={() => this.editFlight(this.props.obj.id)}> Save Edits </button>
          </div>
        ) : (
          <div className="flight-card">
            <div>{departureAirport}</div>
            <div>{departureDate}</div>
            <div>{departureTime}</div>
            <div>{arrivalAirport}</div>
            <div>{arrivalDate}</div>
            <div>{arrivalTime}</div>
            <div>{cabin}</div>
            <button
              className="editButtons"
              onClick={() => this.setState({ isEditing: true })}
            >
              {" "}
              Edit{" "}
            </button>
            <button
              className="editButtons"
              onClick={() => this.props.deleteFlight(this.props.obj.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default FlightCard;
