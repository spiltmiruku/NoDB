import React from "react";
import spinningporo from "../resources/spinningporo.gif";

const Header = props => {
  console.log(props);
  let headerText = !props.onUpcomingTripsPage ? (
    <h1>Notre Petit Monde</h1>
  ) : (
    <h1>Upcoming Trips</h1>
  );
  return (
    <header id="header">
<img id="poro" src={spinningporo} />
      {headerText}
    </header>
  );
};

export default Header;
