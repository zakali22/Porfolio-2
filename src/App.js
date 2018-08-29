import React, { Component } from 'react';

import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Headline from './components/Headline';
import ProjectListing from './components/ProjectListing';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

import {Element} from 'react-scroll';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <Element name="resume">
          <Headline />
        </Element>

        <Element name="work">
          <ProjectListing />
        </Element>

        <SkillsSection />
        <Element name="contact">
          <Footer />
        </Element>
      </div>
    )
  }
}

export default App;
