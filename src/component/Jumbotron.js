import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>
            Responsive, elegant web development with an <span>innovative</span>{" "}
            touch
          </h1>
          <Fade bottom>
            <p>
              My name is Zak, I am a freelance frontend developer and designer
            </p>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
