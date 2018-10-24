import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <Fade left>
            <div className="footer__contacts">
              <h3>
                <i class="far fa-envelope" /> ha225ahmed@gmail.com
              </h3>
              <h3>
                <i class="fas fa-mobile-alt" /> +44735828040549
              </h3>
            </div>
          </Fade>
          <Fade right>
            <div className="footer__social">
              <h3>
                <i class="fab fa-linkedin" />
              </h3>
              <h3>
                <i class="fab fa-github" />
              </h3>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Footer;
