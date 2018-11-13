import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="container">
          <h1>
            <span>{this.props.displayStart}</span> <br /> projects
          </h1>
          <p>
            I'm a freelance front-end developer with 1+ years experience. I
            pride myself on writing concise yet readable code, solving problems
            and always strive to create the highest quality user experience
            possible. I'm told I have a genuine eye for aesthetics and enjoy the
            creative process.
          </p>
        </div>
      </div>
    );
  }
}

export default Intro;
