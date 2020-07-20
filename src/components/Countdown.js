import React, { Component } from "react";
import "../scss/index.scss";
import Blink from "./Blink";
class Countdown extends Component {
  state = {
    //assigning state that will be modified later
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    timerInc: 10 // This is set to ten for purposes of providing a default
  };

  startTimer = () => {
    this.setState({
      // here we begin the timer, using the this.state placeholders for the values
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
      timerInc: this.state.timerInc,
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - this.state.timerInc; //time selected by the user minus the interval
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime, //sets state to the value calculated above
        });
      } else {
        //clears the timer when it has finished
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Time's Up!");
      }
    }, 10);
  };

  stopTimer = () => { // stops timer
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => { // resets timer to 0
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart,
      });
    }
  };

  adjustTimer = (input) => { // click handlers for time
    const { timerTime, timerOn, timerInc } = this.state;
    if (!timerOn) { // click handlers for when timer is not running
      if (input === "incMinutes" && timerTime + 60000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      }
    }
    if (timerOn) { // click handlers for buttons present when timer is running
      if (input === "oneInc") {
        this.setState({ timerInc: 10 });
      } else if (input === "oneHalfInc") {
        this.setState({ timerInc: 15 });
      } else if (input === "doubleInc") {
        this.setState({ timerInc: 20 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state; // no need to include timerInc as its only needed above
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    return (
      <div className="card border-dark">
        <div className=" bg-white card-body">
          <div className="card-header bg-white">
              {timerOn === true && timerTime <= 20000 && timerTime >= 10000 && (
              <div className="card-title appear">Almost there</div>
            )}
            {timerOn === true && timerTime <= 9999 && timerTime >= 1750 && (
              <Blink text="Almost There"> </Blink>
            )}
            {timerStart !== 0 && (timerTime <= 1500 || timerTime === 0) && (
              <div className="card-title appear">Time's Up!</div>
            )}
          </div>
          <div className="display display-1">
            {minutes} : {seconds}
          </div>

          <div className="display-label">Minutes : Seconds</div>
          <div className="btn-group controls">
            <button
              className="btn bg-dark btn-outline-light"
              onClick={() => this.adjustTimer("decMinutes")}
            >
              &#8681;
            </button>
            <button
              className="btn bg-dark btn-outline-light "
              onClick={() => this.adjustTimer("incMinutes")}
            >
              &#8679;
            </button>
            {timerOn === false &&
              (timerStart === 0 || timerTime === timerStart) && (
                <button
                  className="Button-start btn btn-outline-light bg-dark "
                  onClick={this.startTimer}
                >
                  Start
                </button>
              )}
            {timerOn === true && timerTime >= 1000 && (
              <button
                className="Button-stop btn btn-outline-light bg-dark"
                onClick={this.stopTimer}
              >
                Stop
              </button>
            )}
            {timerOn === false &&
              timerStart !== 0 &&
              timerStart !== timerTime &&
              timerTime !== 0 && (
                <button
                  className="Button-start btn btn-outline-light bg-dark"
                  onClick={this.startTimer}
                >
                  Resume
                </button>
              )}
            {(timerOn === false || timerTime < 1000) &&
              timerStart !== timerTime &&
              timerStart > 0 && (
                <button
                  className="Button-reset btn btn-outline-light bg-dark"
                  onClick={this.resetTimer}
                >
                  Reset
                </button>
              )}
            {timerOn === true && timerTime >= 1000 && this.state.timerInc !== 10 &&(
              <button
                className="btn bg-dark btn-outline-light "
                onClick={() => this.adjustTimer("oneInc")}
              >
                1x
              </button>
            )}
            {timerOn === true && timerTime >= 1000 && this.state.timerInc === 10 && (
                <button
                    className="btn bg-dark btn-outline-warning "
                    onClick={() => this.adjustTimer("oneInc")}
                >
                  1x
                </button>
            )}
            {timerOn === true && timerTime >= 1000 && this.state.timerInc !== 15 &&(
              <button
                className="btn bg-dark btn-outline-light "
                onClick={() => this.adjustTimer("oneHalfInc")}
              >
                1.5x
              </button>
            )}
            {timerOn === true && timerTime >= 1000 && this.state.timerInc === 15 && (
                <button
                    className="btn bg-dark btn-outline-warning "
                    onClick={() => this.adjustTimer("oneHalfInc")}
                >
                  1.5x
                </button>
            )}
            {timerOn === true && timerTime >= 1000 && this.state.timerInc !== 20 && (
              <button
                className="btn bg-dark btn-outline-light "
                onClick={() => this.adjustTimer("doubleInc")}
              >
                2x
              </button>
            )}
            {timerOn === true && timerTime >= 1000 && this.state.timerInc === 20 && (
              <button
                className="btn bg-dark btn-outline-warning "
                onClick={() => this.adjustTimer("doubleInc")}
              >
                2x
              </button>
            )}
          </div>
        </div>
        <div className="card-footer alert alert-dismissible w-50 mt-5 align-self-center">
          In order to use the application, press the upwards pointing arrow to a
          desired number of minutes then press start.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Countdown;
