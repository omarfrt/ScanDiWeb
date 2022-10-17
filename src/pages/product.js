import React from "react";
import Header from "../components/header";
import PdpImageContainer from "../components/pdpImageContainer";
import PageContainer from "../components/pageContainer";
import styled from "styled-components";
import * as Typography from "../components/typography";
import Attributes from "../components/attributes";
import { withRouter } from "react-router-dom";
import { PRODUCT_BY_ID } from "../queries/product";
import { Query } from "@apollo/client/react/components";
import { ATCButton } from "../components/buttons";
import { CURRENT_CURRENCY } from "../queries/currency";

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
    const id = this.props.match.params.id;
    function createMarkup(data) {
      return { __html: data };
    }
    return (
      <PageContainer>
        <Header />

        <Query query={PRODUCT_BY_ID} variables={{ id }}>
          {({ data, loading }) => {
            if (loading) return "Loading...";
            return (
              <>
                <Container>
                  <PdpImageContainer gallery={data.product.gallery} />
                  <div>
                    <Title>
                      {data.product.name ? (
                        <Typography.P1title>
                          {data.product.name}
                        </Typography.P1title>
                      ) : null}

                      <Typography.P2title>
                        {data.product.brand}
                      </Typography.P2title>
                    </Title>
                    <Attributes attributes={data.product.attributes} />
                    <Price>
                      <Query query={CURRENT_CURRENCY}>
                        {({ data: { currency }, loading }) => {
                          if (loading) return null;
                          const price = data.product.prices.find(
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
                    <ButtonAddToCart>
                      <ATCButton>ADD TO CART</ATCButton>
                    </ButtonAddToCart>
                    <Description>
                      <Typography.Description
                        dangerouslySetInnerHTML={createMarkup(
                          data.product.description
                        )}
                      ></Typography.Description>
                    </Description>
                  </div>
                </Container>
              </>
            );
          }}
        </Query>
      </PageContainer>
    );
  }
}

export default withRouter(Product);
