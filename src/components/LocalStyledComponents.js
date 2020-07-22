import styled, { css, keyframes } from "styled-components";
import { FaPause, FaPlay } from "react-icons/fa";
import { Button, ButtonGroup, Navbar } from "react-bootstrap";

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
  animation: ${blinker} 0.25s linear infinite;
`;
export const StyledTimeDisplay = styled.h1`
  display: block;
  font-size: 10rem;
  margin-left: 20%;
  color: ${({ warning }) => (warning ? "#F0285B" : "#343a40")};
  ${({ blink }) => (blink ? blinkAnimation : null)};
  font-family: "Titan One", sans-serif;
`;

export const StyledPlay = styled(FaPlay)`
  height: 6rem;
  width: 6rem;
  justify-self: end;
  align-self: end;
  margin-left: 6rem;
  cursor: pointer;
  fill: #1da1f2;
  &:hover {
    fill: #657786;
  }
`;

export const StyledPause = styled(FaPause)`
  height: 6rem;
  width: 6rem;
  justify-self: end;
  align-self: end;
  margin-left: 6rem;
  cursor: pointer;
  fill: #1da1f2;
  &:hover {
    fill: hsl(220, 5%, 65%);
  }
`;

export const RateButton = styled(Button)`
  && {
    margin: 0;
    font-family: "Titan One", sans-serif;
    font-size: 2.25rem;
    width: 15rem;
  }
  &:hover {
    background: #343a40;
    color: #d9d9d9;
    border-color: #1a1b23;
    cursor: pointer;
  }
`;
export const RateGroup = styled(ButtonGroup)`
  padding: 0;
  cursor: pointer;
`;
export const StyledHeader = styled(Navbar)`
  display: flex;
  flex-basis: fit-content;
  justify-items: center;
  border-bottom: 0.25rem solid #14171a;
  background-color: #343a40;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%2317141a' fill-opacity='0.4'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;
export const StyledFooter = styled.footer`
  background-color: #343a40;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%2317141a' fill-opacity='0.4'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  display: flex;
  flex-basis: fit-content;
  justify-content: space-between;
  justify-items: right;
  border-top: 0.25rem solid #14171a;
  cursor: pointer;
`;
const spin = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const StyledLogo = styled.img`
  width: 6rem;
  height: 6rem;
  cursor: crosshair;
  margin-right: 25%;
  margin-left: 0;
  background: #fff;
  border-radius: 25px;
  border: double 0.5rem #657786;
  animation: ${spin} infinite 25s linear;
`;
export const StyledIcon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 0;
  background: #fff;
  margin-top: 0.65rem;
  border: double 0.5rem #657786;
  float: right;
  cursor: crosshair;
  border-radius: 10px;
  animation: ${spin} infinite 25s linear;
`;
export const StyledBrand = styled(Navbar.Brand)`
  font-family: "Titan One", sans-serif;
  text-align: right;
  font-size: 3.5rem;
  padding-right: 2.5%;
  text-shadow: 0.165rem 0.165rem #1da1f2;
`;
export const StyledLink = styled.a`
  color: #fff;
  text-shadow: 0.165rem 0.165rem #1da1f2;
  font-size: 1.75rem;
  padding-left: 0.75rem;
  padding-bottom: 2.5%;
  &:hover {
    color: #657786;
    text-shadow: 0.165rem 0.165rem #ffffff;
  }
`;
export const StyledButton = styled(Button)`
  height: 2.5rem;
  margin-top: 0.9rem;
`;
