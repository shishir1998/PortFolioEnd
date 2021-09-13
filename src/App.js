import React from "react";

import "./App.css";
import Banner from "./components/Banner";

import Navbar from "./components/Navbar";
import NavbarPC from "./components/NavbarPC";
import Project from "./components/Project";
import About from "./components/About";
import Language from "./components/Language";
import SandC from "./components/SandC";
import AdditionalInfo from "./components/AdditionalInfo";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  // Declare a new state variable with the "useState" Hook
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  return (
    <Router>
      <div className="App">
      
        {width < breakpoint ? <Navbar /> : <NavbarPC />}
        <Switch>
          <Route path="/contact">
            <GetInTouch />
          </Route>
          <Route path="/home">
            <Banner />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/about1">
            <About />
          </Route>
          <Route path="/lang">
            <Language />
          </Route>
          <Route path="/SandC">
            <SandC />
          </Route>
          <Route path="/additional">
            <AdditionalInfo />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
