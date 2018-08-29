import React, {Component} from "react";
import ReactDOM from "react-dom";
import {scroller} from 'react-scroll';


class Nav extends Component {

  scrollToElement = (element) => {
    console.log(element);
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -140
    });
  }

  render(){
    return (
      <div className="mt-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
          <a href="#" className="navbar-brand"><strong style={{"background": "#fff", "padding": "12px", "border-radius": "4px", "color": "#28669F"}}>za</strong></a>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                 <p className="nav-link" onClick={() => this.scrollToElement('resume')}>about </p>
                </li>
                <li className="nav-item">
                  
                   <p onClick={() => this.scrollToElement('work')} className="nav-link" >work</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link" onClick={() => this.scrollToElement('contact')}> contact </p>
                </li>
              </ul>
            </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
