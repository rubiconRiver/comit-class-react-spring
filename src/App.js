// @ts-check
import React from "react";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import Fetch from "./Fetch";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/button">Button</Link>
        <Switch>
          <Route exact path="/" component={Fetch} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/button" component={Button} />
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
