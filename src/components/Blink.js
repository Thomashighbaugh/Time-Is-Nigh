import React from "react";
import PropTypes from "prop-types";
/* This component will make the text blink upon the conditions specified in Countdown.js
 This is also possible using the blink() method, however React components seemed more reasonable for a React App */
class Blink extends React.Component {
  render() {
    //declare variables
    const { text, blinkTime } = this.props;
    const root = document.documentElement;
    root.style.setProperty("--blink-time", `${blinkTime}s`);
    return <div className="card-title appear blink">{text}</div>;
  }
}

Blink.propTypes = {
  /** declare property types */
  text: PropTypes.string,
  blinkTime: PropTypes.number,
};
Blink.defaultProps = {
  /** Provides defaults that if this is reused
   * later can be modified when the component
   * is called as properties **/

  text: "Almost There",
  blinkTime: 1,
};

export default Blink;
