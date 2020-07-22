import React from "react";
import Col from "react-bootstrap/Col";
import {
  StyledBrand,
  StyledFooter,
  StyledIcon,
  StyledLink,
} from "./LocalStyledComponents";
import logo from "../logo.svg";

const Footer = () => (
  <StyledFooter>
    <StyledBrand>
      <StyledLink href="https://thomasleonhighbaugh.me">
        Thomas Leon Highbaugh
      </StyledLink>
    </StyledBrand>
    <Col className="col-6">
      <StyledIcon src={logo} alt="" />
    </Col>
  </StyledFooter>
);

export default Footer;
