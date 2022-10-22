import React from "react";
import * as Typography from "../components/typography";
import styled from "styled-components";
import CartImage from "./cartImage";
import { ColorAttributes, OtherAttributes, PriceSection } from "./attributes";
import { cart } from "..";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  border-top: 1px solid #e5e5e5;
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
    cart(
      this.props.cart.map((cartItem, index) => {
        if (index !== this.props.index) {
          return cartItem;
        }
        return {
          ...cartItem,
          attributes: cartItem.attributes.map((item) => {
            if (!newAttribute[item.id]) {
              return item;
            }
            return {
              ...item,
              selectedValue: newAttribute[item.id],
            };
          }),
        };
      })
    );
    console.log({ newatt: newAttribute });
  };

  render() {
    const { product } = this.props;
    //idk why the querie returns size s l xl ... for shoes ?
    console.log({ product });
    return (
      <Wrapper>
        <Layout>
          <Typography.P1title>{product.name}</Typography.P1title>
          <Typography.P2title> {product.brand}</Typography.P2title>

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
          <PriceSection prices={product.prices} />
        </Layout>
        <>
          <CartImage gallery={product.gallery} />
        </>
      </Wrapper>
    );
  }
}
export default CartItem;
