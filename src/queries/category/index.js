import { gql } from "@apollo/client";

export const ALL_CATEGORIES = gql`
  query category {
    categories {
      name
    }
  }
`;
export const CATEGORY_BY_NAME = gql`
  query categoryByName($title: String!) {
    category(input: { title: $title }) {
      categoryByNameproducts {
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
          itmes {
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
  }
`;
