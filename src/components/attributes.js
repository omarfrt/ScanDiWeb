import React from "react";
import styled from "styled-components";
import * as Typography from "./typography";
import { ATCButton } from "../components/buttons";
import { CURRENT_CURRENCY } from "../queries/currency";
import { cart } from "..";
import { CART } from "../queries/product";
import { Query } from "@apollo/client/react/components";

const Size = styled.button`
  width: fit-content;
  height: 24px;
  padding: 0 4px;
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
    props.selected ? "3px solid #5ECE7B" : "1px solid white"};
  background-color: ${(props) => props.color};
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
  handleUpdate = (newAttribute) => {
    this.setState((prev) => ({
      ...prev,
      ...newAttribute,
    }));
  };

  render() {
    const { product } = this.props;
    console.log({ state: this.state });
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
            attributes: product.attributes.map((item) => ({
              ...item,
              selectedValue: this.state[item.id],
            })),
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
              onClick={() => {
                const quantity = 1;
                this.props.product.quantity = quantity;
                const newCart = [...cartState.cart, this.props.product];
                cart(newCart);
                localStorage.setItem("cart", JSON.stringify(newCart));
              }}
              disabled={this.props.product.inStock ? false : true}
            >
              ADD TO CART
            </ATCButton>
          </ButtonAddToCart>
        )}
      </Query>
    );
  }
}
export class PriceSection extends React.Component {
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
export class OtherAttributes extends React.Component {
  render() {
    const { attribute, handleUpdate, state = {} } = this.props;
    return (
      <>
        <Typography.Size>{attribute.name}</Typography.Size>
        <SizeLayout>
          {attribute.items.map((item, index) => (
            <Size
              key={index}
              selected={item.value === state[attribute.id]}
              onClick={() =>
                handleUpdate({
                  [attribute.id]: item.value,
                })
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

export class ColorAttributes extends React.Component {
  render() {
    const { attribute, handleUpdate, state = {} } = this.props;
    return (
      <>
        <Typography.Size>{attribute.name}</Typography.Size>
        <SizeLayout>
          {attribute.items.map((item, index) => (
            <Color
              key={index}
              selected={item.value === state[attribute.id]}
              onClick={() =>
                handleUpdate({
                  [attribute.id]: item.value,
                })
              }
              color={item.value}
            />
          ))}
        </SizeLayout>
      </>
    );
  }
}

export default Attributes;
