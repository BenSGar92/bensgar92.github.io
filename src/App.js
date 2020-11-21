import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Main from "./pages/Main/Main"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import './index.css';

function App() {
  return (
    <Router>
      <div className="background">
        <Navbar />
        {/* <Wrapper> */}
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        {/* </Wrapper> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
