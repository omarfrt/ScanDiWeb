import React, { Component } from "react";
import styled from "styled-components";
import * as Typography from "./typography";
import { Query } from "@apollo/client/react/components";
import { CART } from "../queries/product";
import MiniCartItem from "../components/miniCartItem";
import MiniCartTotal from "../components/miniCartTotal";
import { COButton, VBButton } from "./buttons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 325px;
  max-height: 600px;
  height: fit-content;
  background: #ffffff;
  overflow-y: scroll;
  padding: 32px 16px;
  position: absolute;
  right: 20px;
  z-index: 10;
`;
const QuantityWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 12px;
`;
const Container = styled.div`
  position: fixed;
  display: flex;
  justifycontent: flex-end;
  paddingright: 72px;
  left: 0px;
  top: 72px;
  right: 0px;
  z-index: 999;
`;
const Overlay = styled.div`
  background-color: rgba(57, 55, 72, 0.22);
  width: 100%;
  height: 100vh;
  top: 0px;
  z-index: 1;
  position: absolute;
`;
export default class MiniCart extends Component {
  render() {
    const { open, onClickOutside } = this.props;
    if (!open) return null;
    // container
    //     minicart
    //     overlay onclick
    return (
      <Container>
        <Overlay onClick={onClickOutside} />
        <Wrapper>
          <Query query={CART}>
            {({ data, loading }) => {
              let result = [];
              const quantity = data.cart
                .map((product) => product.quantity)
                .reduce((a, b) => a + b, 0);
              if (loading) return "loading ... ";
              if (!data.cart) return null;
              return (
                <>
                  <QuantityWrapper>
                    <Typography.SPrice>My Bag, </Typography.SPrice>
                    <Typography.Price>{quantity} items</Typography.Price>
                  </QuantityWrapper>
                  {data.cart.forEach(function (a) {
                    if (!this[a.attributes.map((e) => e.selectedValue)]) {
                      this[a.attributes.map((e) => e.selectedValue)] = {
                        product: a,
                        quantity: 0,
                      };
                      result.push(
                        this[a.attributes.map((e) => e.selectedValue)]
                      );
                    }
                    this[a.attributes.map((e) => e.selectedValue)].quantity +=
                      a.quantity;
                  }, [])}
                  {result.map((product, index) => (
                    <>
                      <MiniCartItem
                        product={product}
                        key={index}
                        index={index}
                        cart={data.cart}
                      />
                    </>
                  ))}
                  {data.cart.length && (
                    <MiniCartTotal
                      prices={data.cart.map((product) => product.prices)}
                      cart={data.cart}
                    />
                  )}
                </>
              );
            }}
          </Query>
          <Link to={"/cart"}>
            <ButtonWrapper>
              <VBButton> VIEW BAG</VBButton>
              <COButton> CHECK OUT</COButton>
            </ButtonWrapper>
          </Link>
        </Wrapper>
      </Container>
    );
  }
}
