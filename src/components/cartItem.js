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
const ImgLayout = styled.div`
  display: flex;
  gap: 24px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  width: 45px;
  height: 288px;
`;
const AddProduct = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid #1d1f22;
`;
const RemoveProduct = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid #1d1f22;
`;
class CartItem extends React.Component {
  handleaddQuantity = () => {
    const newItem = this.props.cart[this.props.index];
    const newCart = [...this.props.cart, newItem];
    cart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  handleRemoveQuantity = () => {
    const indexOfObject = this.props.cart.findIndex((object) => {
      return (
        this.props.product.product.attributes
          .map((att) => att.selectedValue)
          .toString() ===
        object.attributes.map((att) => att.selectedValue).toString()
      );
    });

    const newCart = [...this.props.cart.filter((_, i) => i !== indexOfObject)];
    localStorage.setItem("cart", JSON.stringify(this.props.cart));
    cart(newCart);
  };

  render() {
    const product = this.props.product.product;
    const itemquantity = this.props.product.quantity;
    if (itemquantity > 0)
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
                    state={{ [attb.id]: attb.selectedValue }}
                  />
                );
              return (
                <OtherAttributes
                  attribute={attb}
                  key={index}
                  state={{ [attb.id]: attb.selectedValue }}
                />
              );
            })}
            <PriceSection prices={product.prices} />
          </Layout>
          <ImgLayout>
            <QuantityWrapper>
              <AddProduct onClick={this.handleaddQuantity}>+</AddProduct>
              <Typography.Price>{itemquantity}</Typography.Price>
              <RemoveProduct onClick={this.handleRemoveQuantity}>
                -
              </RemoveProduct>
            </QuantityWrapper>
            <CartImage gallery={product.gallery} />
          </ImgLayout>
        </Wrapper>
      );
  }
}
export default CartItem;
