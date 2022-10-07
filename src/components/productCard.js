import React from "react";
import * as Typography from "./typography";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    const { isDisabled, onAddToCart } = this.props;

    const handleOnAddToCartClick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      onAddToCart?.();
    };
    return (
      <CardLink
        to="/product"
        tabIndex={isDisabled ? "-1" : "1"}
        isDisabled={isDisabled}
      >
        <div style={{ position: "relative" }}>
          <Cover src="/image.png" alt="Product" width="354px" height="330px" />
          <CartButton onClick={handleOnAddToCartClick}>
            <img src="/empty_cart.svg" alt="cart" />
          </CartButton>
        </div>
        <Title style={{ marginTop: 24 }}>Apollo Running Short</Title>
        <Price>$50.00</Price>
      </CardLink>
    );
  }
}

export default ProductCard;
