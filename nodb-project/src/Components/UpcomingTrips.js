import React from 'react';
// import axios from 'axios';
import Header from './Header';
import FlightCard from './FlightCard';

const UpcomingTrips = (props) => 
        
        (
            <div>
            <Header onUpcomingTripsPage={true} />
              {props.trips.map((element) => {
                  return (<FlightCard
                    editFlight={props.editFlight}
                    deleteFlight={props.deleteFlight}
                    obj={element}
                    /> 
                    )
              } )}
            </div>
        )

export default UpcomingTrips;