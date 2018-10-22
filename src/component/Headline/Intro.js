import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class Intro extends Component {
  state = {
    displayStart: 0,
    displayEnd: 6
  };

  projectCount = () => {
    console.log(this.state.displayStart);
  };

  render() {
    return (
      <div className="intro">
        <div className="container">
          <Slide onReveal={() => this.projectCount()} up>
            <h1>
              <span>{this.state.displayStart}</span> <br /> projects
            </h1>
            <p>
              I'm a freelance front-end developer with ~1 years experience. I
              pride myself on writing concise yet readable code, solving
              problems and always strive to create the highest quality user
              experience possible. I'm told I have a genuine eye for aesthetics
              and enjoy working closely with designers to help achieve their
              vision.
            </p>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Intro;
