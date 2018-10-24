import React, { Component } from "react";
import { scroller } from "react-scroll";

class Header extends Component {
  scrollTo = element => {
    console.log(element);
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 5 // Scrolls to element + 50 pixels down the page
    });
  };
  render() {
    return (
      <div className="header">
        <div className="header__navigation">
          <h2>za</h2>
          <nav className="header__navigation--nav">
            <p
              className="header__navigation--nav_item"
              onClick={this.scrollTo.bind(this, "about")}
            >
              about
            </p>
            <p
              className="header__navigation--nav_item"
              onClick={this.scrollTo.bind(this, "projects")}
            >
              portfolio
            </p>
            <p className="header__navigation--nav_item">resume</p>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
