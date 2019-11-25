import React, {Component} from 'react';
// import axios from 'axios';
import FlightCard from './FlightCard';

const UpcomingTrips = (props) => 
        
        (
            <div>
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