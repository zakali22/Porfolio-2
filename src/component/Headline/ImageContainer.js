import React, { Component } from "react";

class ImageContainer extends Component {
  render() {
    const bStyle = {
      backgroundImage: `url(${this.props.backgroundImage})`,
      backgroundPosition: "top",
      backgroundSize: "cover"
    };
    return (
      <div style={bStyle}>
        <span className="projects__image--desc">{this.props.projectName}</span>
      </div>
    );
  }
}

export default ImageContainer;
