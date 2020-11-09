import React from "react";
import "./hero.css";

function Hero(props) {
  return (
    <div className="img-fluid hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;