import styled, { css, keyframes } from 'styled-components';
import { FaPause, FaPlay } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 5rem;
`;

export const CenteredTimer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AlertText = styled.p`
  color: hsl(216, 10%, 10%);
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 0;
  margin-top: 2rem;
`;

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
export const StyledTimeDisplay = styled.h1`
  display: inline-block;
  font-size: 6rem;
  color: ${({ warning }) => (warning ? 'hsl(10, 90%, 50%)' : 'hsl(216, 10%, 10%)')};
  ${({ blink }) => (blink ? blinkAnimation : null)};
`;

export const StyledPlay = styled(FaPlay)`
  height: 2rem;
  width: 2rem;
  margin-left: 2rem;
  cursor: pointer;
  fill: hsl(216, 10%, 10%);
  &:hover {
    fill: hsl(220, 5%, 65%);
  }
`;

export const StyledPause = styled(FaPause)`
  height: 2rem;
  width: 2rem;
  margin-left: 2rem;
  cursor: pointer;
  fill: hsl(216, 10%, 10%);
  &:hover {
    fill: hsl(220, 5%, 65%);
  }
`;

export const RateButton = styled(Button)`
  && {
    margin:  0.5rem;
  }
`;

