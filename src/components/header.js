import React from "react";
import * as Typography from "./typography";
import styled from "styled-components";
import { CART } from "../queries/product";
import { withRouter, Link } from "react-router-dom";
import { currency } from "../";
import { Query } from "@apollo/client/react/components";
import { ALL_CURRENCIES, CURRENT_CURRENCY } from "../queries/currency";
const CATEGORIES = ["tech", "clothes", "all"];
//reactive variables

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
const CartIconLayout = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  div {
    background-color: black;
    border-radius: 999px;
    position: absolute;
    top: -12px;
    right: -12px;
    width: 20px;
    height: 20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
  }
`;
class Header extends React.Component {
  render() {
    const categoryParam = this.props.match.params.category;

    return (
      <Container>
        <LinksContainer>
          {CATEGORIES.map((category, index) => (
            <Link to={`/${category}`} key={index}>
              <HeaderLink key={category} isActive={categoryParam === category}>
                {category}
              </HeaderLink>
            </Link>
          ))}
        </LinksContainer>
        <Logo src="/a-logo.svg" alt="Logo" />
        <ActionsContainer>
          <Query query={CURRENT_CURRENCY}>
            {({ data: { currency: currentCurrency } }) => (
              <Query query={ALL_CURRENCIES}>
                {({ data, loading }) => {
                  if (loading) return "Loading...";
                  return (
                    <select
                      name="currencies"
                      defaultValue={currentCurrency}
                      onChange={(e) => {
                        currency(e.target.value);
                        localStorage.setItem("currency", e.target.value);
                      }}
                    >
                      {data.currencies.map((currency, index) => (
                        <option key={index} value={currency.label}>
                          {currency.label} ({currency.symbol})
                        </option>
                      ))}
                    </select>
                  );
                }}
              </Query>
            )}
          </Query>
          <Link to="/cart">
            <CartIconLayout>
              <Query query={CART}>
                {({ data: cartState }) => {
                  if (!cartState.cart.length) return null;
                  return <div>{cartState.cart.length}</div>;
                }}
              </Query>
              <img src="/cart.svg" alt="cart" />
            </CartIconLayout>
          </Link>
        </ActionsContainer>
      </Container>
    );
  }
}

export default withRouter(Header);
