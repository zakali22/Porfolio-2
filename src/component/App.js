import React, { Component } from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Headline from "./Headline/Headline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <Headline />
      </div>
    );
  }
}

export default App;
