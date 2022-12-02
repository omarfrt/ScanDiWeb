import React from "react";
import * as Typography from "./typography";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import { CURRENT_CURRENCY } from "../queries/currency";
import PopupAttb from "./popupAttb";

const Cover = styled.img`
  opacity: 1;
`;
const Title = styled(Typography.PL)`
  color: #1d1f22;
  margintop: 24px;
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
  opacity: ${({ isDisabled }) => isDisabled && 0.5};
  pointer-events: ${Title}, ${Price} {
    color: ${({ isDisabled }) => isDisabled && "#8D8F9A"};
  }
  ${Cover} {
    opacity: ${({ isDisabled }) => isDisabled && 0.5};
  }
  &:hover,
  &:focus-within {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  ${CartButton} {
    opacity: 0;
  }
  &:hover ${CartButton} {
    opacity: 1;
  }
`;
const ImgDiv = styled.div`
  position: relative;
`;
const OutOfStock = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #8d8f9a;
`;
class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  render() {
    const { name, prices, gallery, inStock, id, brand } = this.props.product;
    let outOfStock;
    if (!inStock) {
      outOfStock = <OutOfStock>Out Of Stock</OutOfStock>;
    }
    return (
      <CardLink
        to={`/product/${id}`}
        tabIndex={!inStock ? "-1" : "1"}
        isDisabled={!inStock}
      >
        <ImgDiv>
          <Cover src={gallery[0]} alt="Product" width="354px" height="330px" />
          {outOfStock}

          <CartButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              this.setState({ isOpen: !this.state.isOpen });
            }}
            disabled={this.props.product.inStock ? false : true}
          >
            <img src="/empty_cart.svg" alt="cart" />
          </CartButton>
        </ImgDiv>
        <PopupAttb
          open={this.state.isOpen}
          onClickOutside={() => this.setState({ isOpen: false })}
          id={id}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        />
        <Title>{name + " " + brand}</Title>
        <Query query={CURRENT_CURRENCY}>
          {({ data: { currency }, loading }) => {
            if (loading) return null;
            const price = prices.find((p) => p.currency.label === currency);
            return (
              <Price>{`${price.currency.symbol} ${price.amount.toFixed(
                2
              )}`}</Price>
            );
          }}
        </Query>
      </CardLink>
    );
  }
}

export default ProductCard;
