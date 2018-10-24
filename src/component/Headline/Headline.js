import React, { Component } from "react";
import Intro from "./Intro";
import ProjectDisplay from "./ProjectDisplay";
import Slide from "react-reveal/Slide";
import { Element } from "react-scroll";

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
          <Element name="about">
            <Intro displayStart={this.state.displayStart} />
          </Element>
        </Slide>
        <Element name="projects">
          <ProjectDisplay />
        </Element>
      </div>
    );
  }
}

export default Headline;
