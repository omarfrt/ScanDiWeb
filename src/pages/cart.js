import React from "react";
import CartItem from "../components/cartItem";
import Header from "../components/header";
import * as Typography from "../components/typography";
import CartTotal from "../components/cartTotal";
import { Query } from "@apollo/client/react/components";
import { CART } from "../queries/product";
import styled from "styled-components";
import PageContainer from "../components/pageContainer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 80px;
`;
const PageTitle = styled.div`
  text-align: left;
  margin-bottom: 55px;
`;
class Cart extends React.Component {
  render() {
    return (
      <PageContainer>
        <Header />
        <Wrapper>
          <PageTitle>
            <Typography.H2>Cart</Typography.H2>
          </PageTitle>
          <Query query={CART}>
            {({ data, loading }) => {
              if (loading) return "loading ... ";
              return (
                <>
                  {console.log(data)}
                  {data.cart.map((product, index) => (
                    <>
                      <CartItem
                        product={product}
                        key={index}
                        index={index}
                        cart={data.cart}
                      />
                    </>
                  ))}

                  {/* <div>
                  <CartItem />
                  <CartItem />
                </div> */}
                </>
              );
            }}
          </Query>
          <div>
            <CartTotal />
          </div>
        </Wrapper>
      </PageContainer>
    );
  }
}
export default Cart;
