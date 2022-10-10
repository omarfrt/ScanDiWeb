import { gql } from "@apollo/client";

export const ALL_CURRENCIES = gql`
  query currencies {
    currencies {
      label
      symbol
    }
  }
`;
export const CURRENT_CURRENCY = gql`
  query currency {
    currency @client
  }
`;
