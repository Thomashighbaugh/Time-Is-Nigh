import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import styled, { keyframes, css } from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

const blinker = keyframes`
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const blinkAnimation = css`
  animation: ${blinker} 1s linear infinite;
`;

const StyledTimeDisplay = styled.h1`
  display: inline-block;
  font-size: 6rem;
  color: ${({ warning }) => (warning ? 'hsl(10, 90%, 50%)' : 'hsl(216, 10%, 10%)')};
  ${({ blink }) => (blink ? blinkAnimation : null)};
`;

const StyledPlay = styled(FaPlay)`
  height: 2rem;
  width: 2rem;
  margin-left: 2rem;
  cursor: pointer;
  fill: hsl(216, 10%, 10%);
  &:hover {
    fill: hsl(220, 5%, 65%);
  }
`;

const StyledPause = styled(FaPause)`
  height: 2rem;
  width: 2rem;
  margin-left: 2rem;
  cursor: pointer;
  fill: hsl(216, 10%, 10%);
  &:hover {
    fill: hsl(220, 5%, 65%);
  }
`;

const RateButton = styled(Button)`
  && {
    margin:  0.5rem;
  }
`;

const Clock = ({
  secondsLeft, pause, resume, setRate, rate, paused,
}) => {
  const getSeconds = () => (`0${secondsLeft % 60}`).slice(-2);
  const getMinutes = () => Math.floor(secondsLeft / 60);
  const minutes = getMinutes();

  const shouldBlink = () => (secondsLeft <= 10 && secondsLeft > 0 && minutes === 0);
  const shouldBeRed = () => (secondsLeft <= 20 && secondsLeft > 0 && minutes === 0);
  const iff = (condition, then, otherwise) => (condition ? then : otherwise);
  return (
    <div>
      <div>
        <StyledTimeDisplay
          blink={shouldBlink()}
          warning={shouldBeRed()}
        >
          {`${minutes}:${getSeconds()}`}
        </StyledTimeDisplay>
        {
          secondsLeft > 0
            ? iff(paused, <StyledPlay onClick={resume} />, <StyledPause onClick={pause} />)
            : null
      }
      </div>
      <div>
        <RateButton variant="contained" type="button" disabled={rate === 1000} onClick={() => setRate(1000)}>1x</RateButton>
        <RateButton variant="contained" type="button" disabled={rate === 750} onClick={() => setRate(750)}>1.5x</RateButton>
        <RateButton variant="contained" type="button" disabled={rate === 500} onClick={() => setRate(500)}>2x</RateButton>
      </div>
    </div>
  );
};

Clock.propTypes = {
  secondsLeft: PropTypes.number,
  pause: PropTypes.func,
  resume: PropTypes.func,
  rate: PropTypes.number,
  setRate: PropTypes.func,
  paused: PropTypes.bool,
};

Clock.defaultProps = {
  secondsLeft: 0,
  pause: () => {},
  resume: () => {},
  rate: 1000,
  setRate: () => {},
  paused: false,
};

export default Clock;
