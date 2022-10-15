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
        <Container>
          <PdpImageContainer />
          <Query query={PRODUCT_BY_ID} variables={{ id }}>
            {({ data, loading }) => {
              if (loading) return "Loading...";
              return (
                <>
                  <div>
                    <img
                      src={data.product.gallery[0]}
                      alt="Product"
                      width={"610px"}
                      height={"511px"}
                    />
                  </div>
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
                      <Typography.Size>Price:</Typography.Size>
                      <Typography.Price>50.00$</Typography.Price>
                    </Price>
                    <ButtonAddToCart>
                      <button>ADD TO CART</button>
                    </ButtonAddToCart>
                    <Description>
                      <Typography.Description
                        dangerouslySetInnerHTML={createMarkup(
                          data.product.description
                        )}
                      ></Typography.Description>
                    </Description>
                  </div>
                </>
              );
            }}
          </Query>
        </Container>
      </PageContainer>
    );
  }
}

export default withRouter(Product);
