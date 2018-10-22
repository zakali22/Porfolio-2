import React from "react";

const Header = props => {
  return (
    <div className="header">
      <div className="header__navigation">
        <h2>za</h2>
        <nav className="header__navigation--nav">
          <p className="header__navigation--nav_item">about</p>
          <p className="header__navigation--nav_item">portfolio</p>
          <p className="header__navigation--nav_item">resume</p>
        </nav>
      </div>
    </div>
  );
};

export default Header;
