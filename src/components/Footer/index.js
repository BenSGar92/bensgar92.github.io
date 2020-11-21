import React from "react";
import { Link } from "react-router-dom"
import "./footer.css";


function Footer(props) {
  return (
    <div>
    <footer className="page-footer font-small py-1 bg-dark text-white-50 fixed-bottom">

        
        <div className="container">
            <ul className="list-unstyled list-inline text-center py-1">
                <li className="list-inline-item">
                    <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} className="btn btn-outline-primary btn-rounded">
                    Contact
                    </Link>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/ben-gardner-6567459a/" target="_blank" className="btn btn-outline-primary btn-rounded">Linkedin</a>
                </li>
                <li className="list-inline-item">
                    <a href="https://github.com/BenSGar92" target="_blank" className="btn btn-outline-primary btn-rounded">Github</a>
                </li>
            </ul>
        </div>
        <div className="footer-copyright text-center py-1">© 2020 Copyright:
            <a href="main"> Ben Gardner</a>
        </div>
    </footer>
    </div>
  );
}

export default Footer;