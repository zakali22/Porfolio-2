import React, { Component } from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
