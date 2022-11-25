import React from "react";
import * as Typography from "./typography";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import { CURRENT_CURRENCY } from "../queries/currency";

const Cover = styled.img`
  opacity: 1;
`;
const Title = styled(Typography.PL)`
  color: #1d1f22;
`;
const Price = styled(Typography.PM)`
  color: #1d1f22;
`;
const CartButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 0px;
  transform: translateY(50%);
  padding: 14px;
  background-color: #5ece7b;
  border-radius: 50%;
  box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
`;
const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 250px;
  max-width: 386px;
  padding: 16px;
  flex: 0 1 25%;
  cursor: pointer;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "all")};
  ${Title}, ${Price} {
    color: ${({ isDisabled }) => isDisabled && "#8D8F9A"};
  }
  ${Cover} {
    opacity: ${({ isDisabled }) => isDisabled && 0.5};
  }
  &:hover,
  &:focus-within {
    box-shadow: ${({ isDisabled }) =>
      isDisabled ? "none" : "0px 4px 35px rgba(168, 172, 176, 0.19)"};
  }
  ${CartButton} {
    opacity: 0;
  }
  &:hover ${CartButton} {
    opacity: ${({ isDisabled }) => (isDisabled ? 0 : 1)};
  }
`;
class ProductCard extends React.Component {
  render() {
    const { onAddToCart } = this.props;
    const { name, prices, gallery, inStock, id, brand } = this.props.product;
    const handleOnAddToCartClick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      onAddToCart?.();
    };
    return (
      <CardLink
        to={`/product/${id}`}
        tabIndex={!inStock ? "-1" : "1"}
        isDisabled={!inStock}
      >
        <div style={{ position: "relative" }}>
          <Cover src={gallery[0]} alt="Product" width="354px" height="330px" />
          <CartButton onClick={handleOnAddToCartClick}>
            <img src="/empty_cart.svg" alt="cart" />
          </CartButton>
        </div>
        <Title style={{ marginTop: 24 }}>{name + " " + brand}</Title>
        <Query query={CURRENT_CURRENCY}>
          {({ data: { currency }, loading }) => {
            if (loading) return null;
            const price = prices.find((p) => p.currency.label === currency);
            return <Price>{`${price.currency.symbol} ${price.amount}`}</Price>;
          }}
        </Query>
      </CardLink>
    );
  }
}

export default ProductCard;
