import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import InputForm from "./components/InputForm.js";
import Clock from "./components/Clock.js";
import {
  AlertText,
  CenteredTimer,
} from "./components/LocalStyledComponents.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;background-color: #e1e8ed;
    font-family: "Bungee", sans-serif;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b7c7d3' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const App = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [rate, setRate] = useState(1000);
  const [paused, setPaused] = useState(false);
  const [isCounting, setIsCounting] = useState(false);

  const halfOriginal = (minutes / 2) * 60;

  let countdownInterval;

  useEffect(() => {
    if (secondsLeft) {
      countdownInterval = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, rate);
    }
    return () => {
      clearInterval(countdownInterval);
    };
  }, [secondsLeft]);

  const handlePause = () => {
    setPaused(true);
    clearInterval(countdownInterval);
  };

  const handleResume = () => {
    setPaused(false);
    setSecondsLeft(secondsLeft - 1);
  };

  const resetCounter = (e) => {
    e.preventDefault();
    setPaused(false);
    setSecondsLeft(0);
    setIsCounting(false);
    setMinutes(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaused(false);
    setIsCounting(true);
    const minutesToSeconds = minutes * 60;
    setSecondsLeft(minutesToSeconds - 1);
  };

  const handleChange = (e) => {
    setMinutes(parseInt(e.target.value, 10));
    setIsCounting(false);
  };

  return (
    <div>
      <GlobalStyle />
      <Header />
      <CenteredTimer>
        <InputForm
          isCounting={isCounting}
          minutes={minutes}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          resetCounter={resetCounter}
        />
        {secondsLeft <= halfOriginal && isCounting && secondsLeft >= 1 ? (
          <AlertText>More than halfway there!</AlertText>
        ) : null}
        {secondsLeft === 0 && isCounting ? (
          <AlertText>Time&#39;s up!</AlertText>
        ) : null}
        <Clock
          secondsLeft={secondsLeft}
          pause={handlePause}
          paused={paused}
          resume={handleResume}
          setRate={setRate}
          rate={rate}
        />
      </CenteredTimer>
      <Footer />
    </div>
  );
};

export default App;
