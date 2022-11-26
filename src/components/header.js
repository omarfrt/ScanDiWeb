import React from "react";
import * as Typography from "./typography";
import styled from "styled-components";
import { CART } from "../queries/product";
import { withRouter, Link } from "react-router-dom";
import { currency } from "../";
import { Query } from "@apollo/client/react/components";
import { ALL_CURRENCIES, CURRENT_CURRENCY } from "../queries/currency";
import { ALL_CATEGORIES } from "../queries/category";
import MiniCart from "./miniCart";
//reactive variables

const HeaderLink = styled(Typography.Small)`
  text-transform: uppercase;
  padding: 4px 16ps 32px;
  color: ${({ isActive }) => (isActive ? "#4ECE7B" : "#1D1F22")};
  border-bottom: ${({ isActive }) => (isActive ? "2px solid #5ece7b" : "none")};
`;

const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 72px;
  padding: 0 88px;
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 999;
  background-color: white;
`;
const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flext-start;
  width: 100%;
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
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  render() {
    const categoryParam = this.props.match.params.category;

    return (
      <Layout>
        <Container>
          <LinksContainer>
            <Query query={ALL_CATEGORIES}>
              {({ data, loading }) => {
                if (loading) return "loading...";
                return (
                  <>
                    {data.categories.map((category, index) => (
                      <Link to={`/${category.name}`} key={index}>
                        <HeaderLink
                          key={category.name}
                          isActive={categoryParam === category.name}
                        >
                          {category.name}
                        </HeaderLink>
                      </Link>
                    ))}
                  </>
                );
              }}
            </Query>
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
            <CartIconLayout>
              <Query query={CART}>
                {({ data: cartState }) => {
                  const quantity = cartState.cart
                    .map((product) => product.quantity)
                    .reduce((a, b) => a + b, 0);
                  if (!quantity) return null;
                  return <div>{quantity}</div>;
                }}
              </Query>
              <img
                src="/cart.svg"
                alt="cart"
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              />
            </CartIconLayout>

            <MiniCart
              open={this.state.isOpen}
              onClickOutside={() => this.setState({ isOpen: false })}
            />
          </ActionsContainer>
        </Container>
      </Layout>
    );
  }
}

export default withRouter(Header);
