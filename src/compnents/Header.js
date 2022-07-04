import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <FaMapMarkerAlt />
      </div>
      <div className="header-left">
        <h3>INDIA COVID-19 Tracker</h3>
        <p>
          Let's all pray to make our Earth Covid-19 free soon. Stay safe and do
          the locate.
        </p>
      </div>

      <div className="header-right">
        <h3>INDIA Map</h3>
        <p>
          Let's all pray to make our Earth Covid-19 free soon. Stay safe and do
          the locate.
        </p>
      </div>
    </div>
  );
};

export default Header;
