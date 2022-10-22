import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  makeVar,
} from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    currency: String
    cart: [Product]
  }
  extend type Price {
    currency: Currency!
    amount: Float!
  }

  extend type Attribute {
    displayValue: String
    value: String
    id: String!
  }

  extend type AttributeSet {
    id: String!
    name: String
    type: String
    items: [Attribute]
    selectedValue: Attribute
  }

  extend type Product {
    id: String!
    name: String!
    inStock: Boolean
    gallery: [String]
    description: String!
    category: String!
    attributes: [AttributeSet]
    prices: [Price!]!
    brand: String!
  }

  extend type Category {
    name: String
    products: [Product]!
  }

  extend type Currency {
    label: String!
    symbol: String!
  }
`;
export const cart = makeVar([]);
export const currency = makeVar(localStorage.getItem("currency"));
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cart: {
          read() {
            return cart();
          },
        },
        currency: {
          read() {
            return currency();
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
  typeDefs,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
