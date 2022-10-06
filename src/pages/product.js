import React from "react";
import Header from "../components/header";
import PdpImageContainer from "../components/pdpImageContainer";
import PageContainer from "../components/pageContainer";
import styled from "styled-components";
import * as Typography from "../components/typography";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 80px;
  text-align: left;
`;
const Title = styled.div`
    display:flex
    flex-direction: column;
    gap:16px`;
const Size = styled.div`
  margin-top: 43px;
`;
const Color = styled.div`
  margin-top: 24px;
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
const Description = styled.div`
  margin-top: 40px;
  width: 292px;
`;
class Product extends React.Component {
  render() {
    return (
      <PageContainer>
        <Header />
        <Container>
          <PdpImageContainer />

          <div>
            <img
              src="./Image.png"
              alt="Product"
              width={"610px"}
              height={"511px"}
            />
          </div>
          <div>
            <Title>
              <Typography.P1title> Apollo</Typography.P1title>
              <Typography.P2title> Running Short</Typography.P2title>
            </Title>
            <Size>
              <Typography.Size>Size:</Typography.Size>
            </Size>
            <Color>
              <Typography.Size>Color:</Typography.Size>
            </Color>
            <Price>
              <Typography.Size>Price:</Typography.Size>
              <Typography.Price>50.00$</Typography.Price>
            </Price>
            <ButtonAddToCart>
              <button>ADD TO CART</button>
            </ButtonAddToCart>
            <Description>
              <Typography.Description>
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </Typography.Description>
            </Description>
          </div>
        </Container>
      </PageContainer>
    );
  }
}

export default Product;
