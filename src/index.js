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
  }
`;
export const currency = makeVar(localStorage.getItem("currency"));
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
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
