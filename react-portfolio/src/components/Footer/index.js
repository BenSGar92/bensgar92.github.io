import React from "react";
import "./footer.css";

function Hero(props) {
  return (
    <div>
    <footer class="page-footer font-small py-1 bg-dark text-white-50 fixed-bottom">

        
        <div class="container">
            <ul class="list-unstyled list-inline text-center py-1">
                <li class="list-inline-item">
                    <a href="contact.html" class="btn btn-outline-primary btn-rounded">Contact</a>
                </li>
                <li class="list-inline-item">
                    <a href="https://www.linkedin.com/in/ben-gardner-6567459a/" target="_blank" class="btn btn-outline-primary btn-rounded">Linkedin</a>
                </li>
                <li class="list-inline-item">
                    <a href="https://github.com/BenSGar92" target="_blank" class="btn btn-outline-primary btn-rounded">Github</a>
                </li>
            </ul>
        </div>
        <div class="footer-copyright text-center py-1">© 2020 Copyright:
            <a href="index.html"> Ben Gardner</a>
        </div>
    </footer>
    </div>
  );
}

export default Hero;