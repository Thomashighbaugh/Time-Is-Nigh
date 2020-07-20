import React, { Component } from "react";
import logo from "../logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-title">
          <h1>Time's Up </h1>
          <h2>A Timer Written In React</h2>
        </div>
      </header>
    );
  }
}

export default Header;
