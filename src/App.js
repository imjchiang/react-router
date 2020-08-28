import React from 'react';
import './App.css';

import
{
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"


import Home from "./Home";
import Procedures from "./Procedures";
import Contact from "./Contact";
import WidgetShow from './WidgetShow';
import Ortho from "./Ortho";
import Gallery from "./Gallery";
import Recommend from "./Recommend";

function App() 
{
  const procedures = ["Deep Cleaning", "Oral Surgery", "Root Canal", "Crown", "Implants", "Fillings"];
  const braces = ["Traditional", "Clear", "Invisalign", "Internal Braces", "Retainer"];
  
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Go back to Home</Link>{" "}
          <Link to="/procedures">See our Procedures</Link>{" "}
          <Link to="/contact">Contact Us!</Link>{" "}
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" render={() => <Procedures procedures={procedures} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures} {...props} />} />

        <Route path="/ortho" render={() => <Ortho braces={braces} />} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/recommendation/:id" render={(props) => <Recommend braces={braces} {...props} />} />
      </div>
    </Router>
  );
}

export default App;
