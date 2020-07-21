import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import Clock from './components/Clock';
import { AlertText, CenteredTimer } from './components/LocalStyledComponents';

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


  const resetCounter = e => {
    e.preventDefault();
    setPaused(false);
    setSecondsLeft(0);
    setIsCounting(false);
    setMinutes(0);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPaused(false);
    setIsCounting(true);
    const minutesToSeconds = minutes * 60;
    setSecondsLeft(minutesToSeconds - 1);
  };

  const handleChange = e => {
    setMinutes(parseInt(e.target.value, 10));
    setIsCounting(false);
  };

  return (
    <CenteredTimer>
      <InputForm
        isCounting={isCounting}
        minutes={minutes}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        resetCounter={resetCounter}
      />
      {
        secondsLeft <= halfOriginal
          && isCounting
          && secondsLeft >= 1 ? <AlertText>More than halfway there!</AlertText> : null
      }
      {
        secondsLeft === 0 && isCounting ? <AlertText>Time is up!</AlertText> : null
      }
      <Clock
        secondsLeft={secondsLeft}
        pause={handlePause}
        paused={paused}
        resume={handleResume}
        setRate={setRate}
        rate={rate}
      />
    </CenteredTimer>
  );
};

export default App;
