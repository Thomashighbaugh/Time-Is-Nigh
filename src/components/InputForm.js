import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { StyledButton, StyledForm } from "./LocalStyledComponents";

const InputForm = ({
  minutes,
  handleChange,
  handleSubmit,
  resetCounter,
  isCounting,
}) => (
  <StyledForm onSubmit={isCounting ? resetCounter : handleSubmit}>
    <Form.Group controlId="formCountdownMinutes">
      <Form.Label htmlFor="timer" >Enter Minutes Below</Form.Label>
      <Form.Control
        placeholder="0"
        onChange={handleChange}
        id="timer"
        inputProps={{ min: "0" }}
        name="timer"
        type="number"
        value={minutes}
        required
      />
    </Form.Group>
    <StyledButton disabled={minutes === 0} variant="primary" type="submit">
      {isCounting ? "Reset" : "Start"}
    </StyledButton>
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
