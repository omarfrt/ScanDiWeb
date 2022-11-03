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

export default class MiniCart extends Component {
  render() {
    const { open } = this.props;
    if (!open) return null;
    return (
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "72px",
          left: 0,
          top: "80px",
          right: 0,
          backgroundColor: "rgba(57, 55, 72, 0.22)",
          width: "100%",
          height: "100vh",
          zIndex: 999,
        }}
      >
        <Wrapper>
          <Query query={CART}>
            {({ data, loading }) => {
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
                  {data.cart.map((product, index) => (
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
      </div>
    );
  }
}
