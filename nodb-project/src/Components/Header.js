import React from 'react';

const Header = (props) => {
    console.log();
    let headerText = (props.onUpcomingTripsPage ? <h1>Planet Express</h1> : <h1>Upcoming Trips</h1>)
    return (
        <header id='header'>
            {headerText}
        </header>
    )
}

export default Header;