import React from "react";
import * as Typography from "./typography";
import Styled from "styled-components";
import { OrderButton } from "./buttons";
import { Query } from "@apollo/client/react/components";
import { CURRENT_CURRENCY } from "../queries/currency";

const Wrapper = Styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 279px;
`;
const TaxWrapper = Styled.div`
    display: flex;
    gap: 20px;`;
const QuantityWrapper = Styled.div`
    display: flex;
    gap: 20px;
    `;
const TotalWrapper = Styled.div`
    display: flex;
    gap: 20px;
    `;

class CartTotal extends React.Component {
  render() {
    const { prices, productQuantity, cart } = this.props;
    const quantitySum = productQuantity.reduce((a, b) => a + b, 0);

    return (
      <Wrapper>
        <Query query={CURRENT_CURRENCY}>
          {({ data: { currency }, loading }) => {
            if (loading) return null;

            const total = cart
              .map(
                (product) =>
                  product.prices
                    .filter((p) => p.currency.label === currency)
                    .map((price) => price.amount)[0] * product.quantity
              )
              .reduce((a, b) => a + b, 0);

            const { symbol } = prices
              .flat()
              .find((p) => p.currency.label === currency).currency;
            const tax = total * 0.21;

            return (
              <>
                <TaxWrapper>
                  <Typography.SPrice>Tax 21%: </Typography.SPrice>
                  <Typography.Price>{`${symbol} ${tax.toFixed(
                    2
                  )}`}</Typography.Price>
                </TaxWrapper>
                <QuantityWrapper>
                  <Typography.SPrice>Quantity: </Typography.SPrice>
                  <Typography.Price>{quantitySum}</Typography.Price>
                </QuantityWrapper>
                <TotalWrapper>
                  <Typography.SPrice>Total: </Typography.SPrice>
                  <Typography.Price>{`${symbol} ${(total + tax).toFixed(
                    2
                  )}`}</Typography.Price>
                </TotalWrapper>
                <OrderButton>order now</OrderButton>
              </>
            );
          }}
        </Query>
      </Wrapper>
    );
  }
}

export default CartTotal;
