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
                    <Attributes product={data.product} />

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
