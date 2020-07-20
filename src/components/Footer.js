import React, { Component } from "react";
import logo from "../logo.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer d-flex">

        <a
          className="App-link align-self-start text-left"
          href="https://thomasleonhighbaugh.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thomas Leon Highbaugh
        </a>
        <img className="App-logo align-self-end" src={logo} alt="logo" />
      </footer>
    );
  }
}

export default Footer;
