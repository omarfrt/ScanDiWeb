import React from "react";
import * as Typography from "../components/typography";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  border-top: 1px solid #e5e5e5;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Size = styled.button`
  width: 63px;
  height: 45px;
  border: 1px solid black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;
const SizeLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Color = styled.button`
  width: 36px;
  height: 36px;
  border: ${(props) =>
    props.selected ? "1px solid #5ECE7B" : "1px solid white"};
`;

const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["blue", "red", "black", "white"];

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size: "", color: "" };
  }
  render() {
    return (
      <Wrapper>
        <Layout>
          <Typography.P1title> Apollo</Typography.P1title>
          <Typography.P2title> Running Short</Typography.P2title>
          <Typography.Price>50.00$</Typography.Price>
          <Typography.Size>SIZE:</Typography.Size>
          <SizeLayout>
            {sizes.map((item, index) => (
              <Size
                key={index}
                selected={index === this.state.size}
                onClick={() => this.setState({ size: index }).bind(this)}
              >
                {item}
              </Size>
            ))}
          </SizeLayout>
          <Typography.Size>Color:</Typography.Size>
          <SizeLayout>
            {colors.map((item, index) => (
              <Color
                key={index}
                selected={index === this.state.color}
                onClick={() => this.setState({ color: index }).bind(this)}
                style={{ background: `${colors[index]}` }}
              />
            ))}
          </SizeLayout>
        </Layout>
        <>
          <img
            src="./Image.png"
            alt="Product"
            width={"200px"}
            height={"288px"}
          />
        </>
      </Wrapper>
    );
  }
}
export default CartItem;
