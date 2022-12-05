import React, { Component } from "react";
import styled from "styled-components";
import * as Typography from "./typography";
import { Query } from "@apollo/client/react/components";
import { ALL_CURRENCIES, CURRENT_CURRENCY } from "../queries/currency";
import * as storage from "../";
const Wrapper = styled.div`
  width: 144px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-height: 600px;
  height: fit-content;
  background: #ffffff;
  overflow-y: scroll;
  padding: 32px 16px;
  position: absolute;
  right: 20px;
  top: 36px;
  z-index: 10;
`;
const Container = styled.div`
  position: fixed;
  display: flex;
  paddingright: 72px;
  width: 114px;
  height: fit-content;
  left: 1248px;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  z-index: 999;
`;

export default class CurencySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <Query query={CURRENT_CURRENCY}>
        {({ data: { currency: currentCurrency } }) => (
          <Query query={ALL_CURRENCIES}>
            {({ data, loading }) => {
              if (loading) return "Loading...";
              return (
                <>
                  <Container>
                    <Typography.Currency onClick={this.handleClick}>
                      {currentCurrency} {this.state.isOpen ? " ▴" : " ▾"}
                    </Typography.Currency>
                    {this.state.isOpen ? (
                      <Wrapper>
                        {data.currencies.map((currency, index) => (
                          <Typography.Currency
                            onClick={() => {
                              localStorage.setItem("currency", currency.label);
                              this.handleClick();
                              storage.currency(currency.label);
                            }}
                          >
                            {currency.label} ({currency.symbol})
                          </Typography.Currency>
                        ))}
                      </Wrapper>
                    ) : null}
                  </Container>
                </>
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}
