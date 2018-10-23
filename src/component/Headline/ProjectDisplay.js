import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Images
import Git from "../../images/git.JPG";
import iGallery from "../../images/igallery-display.png";
import Spacey from "../../images/spacey.JPG";
import Weather from "../../images/weather.jpg";
import BD from "../../images/bd-display.png";

const ImageContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-position: top;
  background-size: cover;
`;

class ProjectDisplay extends Component {
  static Images = [
    { image: iGallery, link: "https://github.com", name: "iGallery" },
    { image: Spacey, link: "https://github.com", name: "Spacey" },
    { image: BD, link: "https://github.com", name: "BD" },
    { image: Git, link: "https://github.com", name: "Git Battle" },
    { image: Weather, link: "https://github.com", name: "Weather webapp" }
  ];
  render() {
    return (
      <div className="projects">
        <div className="container">
          {ProjectDisplay.Images.map(project => {
            return (
              <a href={project.link} className="projects__image">
                <ImageContainer backgroundImage={project.image}>
                  <span className="projects__image--desc">{project.name}</span>
                </ImageContainer>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectDisplay;
