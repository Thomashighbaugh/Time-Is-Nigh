import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { StyledForm } from './LocalStyledComponents';

const InputForm = ({
  minutes, handleChange, handleSubmit, resetCounter, isCounting,
}) => (
  <StyledForm onSubmit={isCounting ? resetCounter : handleSubmit}>
    <Form.Group controlId="formCountdownMinutes">
      <Form.Label htmlFor="timer">Countdown (minutes)</Form.Label>
      <Form.Control
        placeholder="0"
        onChange={handleChange}
        id="timer"
        inputProps={{ min: '0' }}
        name="timer"
        type="number"
        value={minutes}
        required
      />
    </Form.Group>
    <Button disabled={minutes === 0} variant="primary" type="submit">
      {isCounting ? 'Reset' : 'Start'}
    </Button>
  </StyledForm>
);

InputForm.propTypes = {
  minutes: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetCounter: PropTypes.func,
  isCounting: PropTypes.bool,
};

InputForm.defaultProps = {
  minutes: 0,
  handleChange: () => {},
  handleSubmit: () => {},
  resetCounter: () => {},
  isCounting: false,
};

export default InputForm;
