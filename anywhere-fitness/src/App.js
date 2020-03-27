import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ClassList from "./components/ClassList";
import Register from "./components/Register";
import CreateClass from "./components/CreateClass";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Anywhere Fitness App</h1>
        </header>

        {/* <CreateClass />
    <Register /> */}
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Register />
        <Switch>
          <PrivateRoute exact path="/protected" component={ClassList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
