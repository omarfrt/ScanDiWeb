import React from "react";
import styled from "styled-components";
import * as Typography from "./typography";
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

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size: "", color: "" };
  }
  render() {
    return (
      <>
        {this.props.attributes.map((item, index) => (
          <>
            {item.name !== "Color" ? (
              <>
                <Typography.Size>{item.name}</Typography.Size>
                <SizeLayout>
                  {item.items.map((item, index) => (
                    <Size
                      key={index}
                      selected={index === this.state.size}
                      onClick={() => this.setState({ size: index }).bind(this)}
                    >
                      {item.value}
                    </Size>
                  ))}
                </SizeLayout>
              </>
            ) : (
              <>
                <Typography.Size>{item.name}</Typography.Size>
                <SizeLayout>
                  {item.items.map((item, index) => (
                    <Color
                      key={index}
                      selected={index === this.state.color}
                      onClick={() => this.setState({ color: index }).bind(this)}
                      style={{ background: `${item.value}` }}
                    />
                  ))}
                </SizeLayout>
              </>
            )}
          </>
        ))}
      </>
    );
  }
}

export default Attributes;
