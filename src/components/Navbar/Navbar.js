import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
       
          <p className="itemLeft">Test Your Memory</p>
          <p className="itemCenter"></p>
          <p className="itemRight">Score: {this.props.score}</p>
       
      </nav>
    );
  }
}

export default Navbar;