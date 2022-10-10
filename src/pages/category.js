import React from "react";
import { Query } from "@apollo/client/react/components";
import Header from "../components/header";
import ProductCardContainer from "../components/productCartContainer";
import * as Typography from "../components/typography";
import PageContainer from "../components/pageContainer";
import ProductCard from "../components/productCard";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { CATEGORY_BY_NAME } from "../queries/category";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled(Typography.H2)`
  text-transform: capitalize;
`;

class Category extends React.Component {
  render() {
    const title = this.props.match.params.category;
    return (
      <PageContainer>
        <Header />
        <Container style={{ margin: "80px 0px 190px" }}>
          <Title>{title}</Title>
          <ProductCardContainer style={{ marginTop: 103 }}>
            <Query query={CATEGORY_BY_NAME} variables={{ title }}>
              {({ data, loading }) => {
                if (loading) return "Loading...";

                return (
                  <>
                    {data.category.products.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </>
                );
              }}
            </Query>
          </ProductCardContainer>
        </Container>
      </PageContainer>
    );
  }
}

export default withRouter(Category);
