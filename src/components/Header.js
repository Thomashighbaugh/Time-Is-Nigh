import React from "react";
import Col from "react-bootstrap/Col";
import { StyledBrand, StyledHeader, StyledLogo } from "./LocalStyledComponents";
import logo from "../logo.svg";

const Header = () => (
  <StyledHeader variant="dark">
    <Col className="col-8">
      <StyledLogo src={logo} alt="spinning hourglass" />
    </Col>
    <StyledBrand>The Time is Nigh</StyledBrand>
  </StyledHeader>
);

export default Header;
