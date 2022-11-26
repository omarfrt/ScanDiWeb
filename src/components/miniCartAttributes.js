import React from "react";
import styled from "styled-components";
import * as Typography from "./typography";
import { CURRENT_CURRENCY } from "../queries/currency";
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
  width: 20px;
  height: 20px;
  border: ${(props) =>
    props.selected ? "3px solid #5ECE7B" : "1px solid white"};
  background-color: ${(props) => props.color};
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

class MiniCartAttributes extends React.Component {
  constructor(props) {
    super(props);

    const state = this.props.product.attributes.reduce(
      (acc, curr) => ({ ...acc, [curr.id]: "" }),
      {}
    );

    this.state = state;
  }

  render() {
    const { product } = this.props;
    console.log({ state: this.state });
    return (
      <>
        <PriceSection prices={product.prices} />
        {product.attributes.map((attb, index) => {
          if (attb.id === "Color")
            return <ColorAttributes state={this.state} attribute={attb} />;
          return <OtherAttributes state={this.state} attribute={attb} />;
        })}
      </>
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
    const { attribute, state = {} } = this.props;
    return (
      <>
        <Typography.Size>{attribute.name}</Typography.Size>
        <SizeLayout>
          {attribute.items.map((item, index) => (
            <Size key={index} selected={item.value === state[attribute.id]}>
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
    const { attribute, state = {} } = this.props;
    return (
      <>
        <Typography.Size>{attribute.name}</Typography.Size>
        <SizeLayout>
          {attribute.items.map((item, index) => (
            <Color
              key={index}
              selected={item.value === state[attribute.id]}
              color={item.value}
            />
          ))}
        </SizeLayout>
      </>
    );
  }
}

export default MiniCartAttributes;
