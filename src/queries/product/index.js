import { gql } from "@apollo/client";

export const PRODUCT_BY_ID = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      brand
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;
