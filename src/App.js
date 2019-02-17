import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Facebook from "./components/facebook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Facebook Auth Test</h1>
        <Facebook />
      </div>
    );
  }
}

export default App;
