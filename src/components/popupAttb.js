import React, { Component } from "react";
import styled from "styled-components";
import Attributes from "../components/attributes";
import { PRODUCT_BY_ID } from "../queries/product";
import { Query } from "@apollo/client/react/components";
const Container = styled.div`
  position: fixed;
  display: flex;
  justifycontent: flex-end;
  paddingright: 72px;
  left: 0px;
  top: 72px;
  right: 0px;
  z-index: 999;
`;
const Overlay = styled.div`
  background-color: rgba(57, 55, 72, 0.22);
  width: 100%;
  height: 100vh;
  top: 0px;
  z-index: 1;
  position: absolute;
  cursor: default;
`;
const Wrapper = styled.div`
  width: 325px;
  max-height: 600px;
  height: fit-content;
  border-radius: 15px;
  background: #ffffff;
  overflow-y: scroll;
  padding: 32px 16px;
  z-index: 10;
  position: absolute;
  top: 180px;
  left: 40%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;
export default class PopupAttb extends Component {
  render() {
    const { open, onClickOutside, id } = this.props;
    if (!open) return null;
    //container
    //  miniAttributes
    //  overlay Onclick
    return (
      <Container>
        <Overlay
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClickOutside();
          }}
        />
        <Wrapper
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Query query={PRODUCT_BY_ID} variables={{ id }}>
            {({ data, loading }) => {
              if (loading) return "Loading...";
              return (
                <>
                  <Attributes
                    product={data.product}
                    onClickOutside={onClickOutside}
                  />
                </>
              );
            }}
          </Query>
        </Wrapper>
      </Container>
    );
  }
}
