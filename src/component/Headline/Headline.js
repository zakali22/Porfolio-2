import React, { Component } from "react";
import Intro from "./Intro";
import ProjectDisplay from "./ProjectDisplay";
import Slide from "react-reveal/Slide";

class Headline extends Component {
  state = {
    displayStart: 0,
    displayEnd: 5
  };

  projectCount = () => {
    let { displayStart, displayEnd } = this.state;
    if (displayStart < displayEnd) {
      this.setState({
        displayStart: displayStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.projectCount();
    }, 350);
    console.log(this.state.displayStart);
  }

  render() {
    return (
      <div className="headline">
        <Slide onReveal={() => this.projectCount()} up cascade>
          <Intro displayStart={this.state.displayStart} />
        </Slide>
        <ProjectDisplay />
      </div>
    );
  }
}

export default Headline;
