import React from "react";
import * as Typography from "../components/typography";
import styled from "styled-components";
import {
  ColorAttributes,
  OtherAttributes,
  PriceSection,
} from "./miniCartAttributes";
import { cart } from "..";

const Thumbnail = styled.img`
  width: 121px;
  height: 190px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

class CartItem extends React.Component {
  handleUpdateCartItem = (newAttribute) => {
    const newCart = this.props.cart.map((cartItem, index) => {
      if (index !== this.props.index) return cartItem;

      return {
        ...cartItem,
        attributes: cartItem.attributes.map((item) => {
          if (!newAttribute[item.id]) return item;
          return {
            ...item,
            selectedValue: newAttribute[item.id],
          };
        }),
      };
    });
    cart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  render() {
    const { product } = this.props;

    return (
      <Wrapper>
        <Layout>
          <Typography.P1title>{product.name}</Typography.P1title>
          <Typography.P2title> {product.brand}</Typography.P2title>
          <PriceSection prices={product.prices} />
          {product.attributes.map((attb, index) => {
            if (attb.id === "Color")
              return (
                <ColorAttributes
                  attribute={attb}
                  key={index}
                  handleUpdate={this.handleUpdateCartItem}
                  state={{ [attb.id]: attb.selectedValue }}
                />
              );
            return (
              <OtherAttributes
                attribute={attb}
                key={index}
                handleUpdate={this.handleUpdateCartItem}
                state={{ [attb.id]: attb.selectedValue }}
              />
            );
          })}
        </Layout>
        <>
          <Thumbnail src={product.gallery[0]} alt="thumbnail" />
        </>
      </Wrapper>
    );
  }
}
export default CartItem;
