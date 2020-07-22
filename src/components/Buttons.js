import React from "react";
import { RateGroup, RateButton } from "./LocalStyledComponents";

const RateButtonGroup = () => (
  <RateGroup variant="primary" aria-label="Rate Controls">
    <RateButton
      size="lg"
      type="button"
      disabled={rate === 1000}
      onClick={() => setRate(1000)}
    >
      1x
    </RateButton>
    <RateButton
      size="lg"
      type="button"
      disabled={rate === 750}
      onClick={() => setRate(750)}
    >
      1.5x
    </RateButton>
    <RateButton
      size="lg"
      type="button"
      disabled={rate === 500}
      onClick={() => setRate(500)}
    >
      2x
    </RateButton>
  </RateGroup>
);

export default RateButtonGroup;
