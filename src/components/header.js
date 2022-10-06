import React from "react";
import * as Typography from "./typography";
import styled from "styled-components";

import { withRouter, Link } from "react-router-dom";

const CATEGORIES = ["tech", "clothes", "something"];

const HeaderLink = styled(Typography.Small)`
  text-transform: uppercase;
  padding: 4px 16ps 32px;
  color: ${({ isActive }) => (isActive ? "#4ECE7B" : "#1D1F22")};
  border-bottom: ${({ isActive }) => (isActive ? "2px solid #5ece7b" : "none")};
`;

const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flext-start;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Logo = styled.img`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 22px;
`;
class Header extends React.Component {
  render() {
    const categoryParam = this.props.match.params.category;

    return (
      <Container>
        <LinksContainer>
          {CATEGORIES.map((category) => (
            <Link to={`/${category}`}>
              <HeaderLink key={category} isActive={categoryParam === category}>
                {category}
              </HeaderLink>
            </Link>
          ))}
        </LinksContainer>
        <Logo src="/a-logo.svg" alt="Logo" />
        <ActionsContainer>
          <img src="/$v.svg" alt="Currency" />

          <img src="/cart.svg" alt="cart" />
        </ActionsContainer>
      </Container>
    );
  }
}

export default withRouter(Header);
