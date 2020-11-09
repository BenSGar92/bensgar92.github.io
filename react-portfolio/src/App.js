import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main"
// import Portfolio from "./pages/Portfolio"
// import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
