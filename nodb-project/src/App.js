import React, { Component } from "react";
import "./App.css";

import Header from './Components/Header';
import MainPage from './Components/MainPage'
import UpcomingTrips from './Components/UpcomingTrips';
import axios from "axios";

import tix from './resources/tix.png';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // onUpcomingTripsPage: false,
      trips: []
    };
  }

  componentDidMount() {
    axios.get('/api/flights')
    .then((res) => this.setState({ trips: res.data }))
    .catch(error => console.log(error))
  }

  addFlight = (flight) => {
    console.log('hit add flight app.js', flight)
    axios.post(`/api/flights`, flight)
    .then(res => {
      this.setState({ trips: res.data })
    })
    .catch(error => console.log(error))
  }

  deleteFlight = (id) => {
    axios.delete(`/api/flights/${id}`)
    .then(res => {
      this.setState({ trips: res.data });
    })
    .catch(error => console.log(error))
  }

  editFlight = (id, flight) => {
    axios.put(`/api/flights?id=${id}`, flight)
    .then(res => {
      this.setState({ trips: res.data });
    })
    .catch(error => console.log(error))
  }

  render() {
    console.log(this.state)
    return <div className="App">
      <Header />
      <img id='tix' src={tix} alt="airplane tickets"/>

    
      <MainPage addFlight={this.addFlight} />
      <UpcomingTrips trips={this.state.trips} deleteFlight={this.deleteFlight} editFlight={this.editFlight} />

    </div>;
  }
}

export default App;
