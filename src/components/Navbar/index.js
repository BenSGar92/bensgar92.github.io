import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom"
import { TimelineLite } from 'gsap';



function Nav(props) {

  let header = useRef(null)
  let tl = new TimelineLite({delay: .8});

  useEffect(() => {
  tl.from(header, { duration: 1, y: '-100%', ease: 'bounce'})
  })

  return (
    <div ref={el => header = el}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
          Ben Gardner
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/main"
                  ? "nav-link active"
                  : "nav-link"
                }>Homepage</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                  Portfolio
                </Link>
              </li>
              {/* <li className="nav-item">
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

export default Nav;