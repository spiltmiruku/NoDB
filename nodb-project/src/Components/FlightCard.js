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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  editFlight = id => {
    let flight = { ...this.state };
    delete flight.isEditing;
    this.props.editFlight(id, flight);
    this.setState({
      isEditing: false
    });
  };

  render() {
   
    console.log(this.state);
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
      <div className='fcwrapper'>
        <a id="upcomingTripsPage"></a>
        {this.state.isEditing ? (
          <div className='flight-card'>
            <input
              onChange={this.handleChange}
              name="departureAirport"
              value={departureAirport}
              type="text"
            />
            <input
              onChange={this.handleChange}
              name="departureDate"
              value={departureDate}
              type="date"
            />
            <input
              onChange={this.handleChange}
              name="departureTime"
              value={departureTime}
              type="time"
            />

            <input
              onChange={this.handleChange}
              name="arrivalAirport"
              value={arrivalAirport}
              type="text"
            />
            <input
              onChange={this.handleChange}
              name="arrivalDate"
              value={arrivalDate}
              type="date"
            />
            <input
              onChange={this.handleChange}
              name="arrivalTime"
              value={arrivalTime}
              type="time"
            />
            <input
              onChange={this.handleChange}
              name="cabin"
              value={cabin}
              type="text"
            />
            <button className='editButtons' onClick={() => this.editFlight(this.props.obj.id)}>
              {" "}
              Save Edits{" "}
            </button>
            </div>
        ) : (
          <div className="flight-card">
    
            <div>{departureAirport}</div>
            <div>{departureDate}</div>
            <div>{departureTime}</div>

            <img src="https://image.flaticon.com/icons/svg/61/61212.svg" alt="small airplane icon" height="20" width="20" />

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
