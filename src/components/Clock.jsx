import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import {
  StyledTimeDisplay, StyledPlay, StyledPause, RateButton, RateGroup,
} from './LocalStyledComponents';

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
      <Row>
        <Col className="col-7">
          <StyledTimeDisplay
            blink={shouldBlink()}
            warning={shouldBeRed()}
          >
            {`${minutes}:${getSeconds()}`}
          </StyledTimeDisplay>
        </Col>

        {
          secondsLeft > 0
            ? iff(paused, <Col className="col-4"><StyledPlay onClick={resume} /></Col>, <Col className="col-4"><StyledPause onClick={pause} /></Col>)
            : null
      }
      </Row>
      <RateGroup variant="primary" aria-label="Rate Controls">
        <RateButton size="lg" type="button" disabled={rate === 1000} onClick={() => setRate(1000)}>1x</RateButton>
        <RateButton size="lg" type="button" disabled={rate === 750} onClick={() => setRate(750)}>1.5x</RateButton>
        <RateButton size="lg" type="button" disabled={rate === 500} onClick={() => setRate(500)}>2x</RateButton>
      </RateGroup>
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
