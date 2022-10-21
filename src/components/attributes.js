import React from "react";
import styled from "styled-components";
import * as Typography from "./typography";
import { ATCButton } from "../components/buttons";
import { CURRENT_CURRENCY } from "../queries/currency";
import { cart } from "..";
import { CART } from "../queries/product";
import { Query } from "@apollo/client/react/components";

const Size = styled.button`
  width: 63px;
  height: 45px;
  border: 1px solid black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;
const SizeLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Color = styled.button`
  width: 36px;
  height: 36px;
  border: ${(props) =>
    props.selected ? "1px solid #5ECE7B" : "1px solid white"};
`;
const Price = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ButtonAddToCart = styled.div`
  margin-top: 20px;
  background-color: #5ece7b;
`;

class Attributes extends React.Component {
  constructor(props) {
    super(props);

    const state = this.props.product.attributes.reduce(
      (acc, curr) => ({ ...acc, [curr.id]: "" }),
      {}
    );
    this.state = state;
  }
  handleUpdate = (state) => {
    this.setState(state);
  };

  render() {
    const { product } = this.props;
    return (
      <>
        {product.attributes.map((attb, index) => {
          if (attb.id === "Color")
            return (
              <ColorAttributes
                state={this.state}
                handleUpdate={this.handleUpdate}
                attribute={attb}
              />
            );
          return (
            <OtherAttributes
              state={this.state}
              handleUpdate={this.handleUpdate}
              attribute={attb}
            />
          );
        })}
        <PriceSection prices={product.prices} />
        <AddToCartButton
          product={{
            ...product,
            attributes: this.state,
          }}
        />
      </>
    );
  }
}
class AddToCartButton extends React.Component {
  render() {
    return (
      <Query query={CART}>
        {({ data: cartState }) => (
          <ButtonAddToCart>
            <ATCButton
              onClick={() => cart([...cartState.cart, this.props.product])}
            >
              ADD TO CART
            </ATCButton>
          </ButtonAddToCart>
        )}
      </Query>
    );
  }
}
class PriceSection extends React.Component {
  render() {
    return (
      <>
        <Price>
          <Query query={CURRENT_CURRENCY}>
            {({ data: { currency }, loading }) => {
              if (loading) return null;
              const price = this.props.prices.find(
                (p) => p.currency.label === currency
              );
              return (
                <>
                  <Typography.Size>Price:</Typography.Size>
                  <Typography.Price>{`${price.currency.symbol} ${price.amount}`}</Typography.Price>
                </>
              );
            }}
          </Query>
        </Price>
      </>
    );
  }
}
class OtherAttributes extends React.Component {
  render() {
    const { attribute, handleUpdate, state } = this.props;
    return (
      <>
        <Typography.Size>{attribute.name}</Typography.Size>
        <SizeLayout>
          {attribute.items.map((item, index) => (
            <Size
              key={index}
              selected={item.value === state[attribute.id]}
              onClick={() =>
                handleUpdate((prev) => ({
                  ...prev,
                  [attribute.id]: item.value,
                }))
              }
            >
              {item.value}
            </Size>
          ))}
        </SizeLayout>
      </>
    );
  }
}

class ColorAttributes extends React.Component {
  render() {
    const { attribute, handleUpdate, state } = this.props;
    return (
      <>
        <Typography.Size>{attribute.name}</Typography.Size>
        <SizeLayout>
          {attribute.items.map((item, index) => (
            <Color
              key={index}
              selected={item.value === state[attribute.id]}
              onClick={() =>
                handleUpdate((prev) => ({
                  ...prev,
                  [attribute.id]: item.value,
                }))
              }
              style={{ background: `${item.value}` }}
            />
          ))}
        </SizeLayout>
      </>
    );
  }
}

export default Attributes;
