import React from "react";
import { Link } from "react-router-dom"
import "./navbar.css";

function Hero(props) {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
          Ben Gardner
          </Link>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/main"
                  ? "nav-link active"
                  : "nav-link"
                }>Homepage</Link>
              </li>
              <li class="nav-item">
                <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                  Portfolio
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default Hero;