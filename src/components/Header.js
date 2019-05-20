import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <React-Fragment>
        <div className="header">
          Notes App
          <div className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
          </div>
        </div>
      </React-Fragment>
    );
  }
}

export default Header;
