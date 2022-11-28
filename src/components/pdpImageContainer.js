import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Thumbnail = styled.img`
  width: 79px;
  height: 80px;
  opacity: ${({ isDisabled }) => isDisabled && 0.5};
`;
const ProducImg = styled.img`
  width: 610px;
  height: 511px;
`;
const OutOfStock = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #8d8f9a;
`;
const ProductImgWrapper = styled.div`
  opacity: ${({ isDisabled }) => isDisabled && 0.5};
`;

class PdpImageContainer extends React.Component {
  render() {
    const { inStock } = this.props.inStock;
    let outOfStock;
    if (!inStock) {
      outOfStock = <OutOfStock>Out Of Stock</OutOfStock>;
    }
    return (
      <>
        <Wrapper>
          {this.props.gallery.map((item, index) => (
            <>
              <Thumbnail src={item} alt="Thumbnail" isDisabled={!inStock} />
            </>
          ))}
        </Wrapper>
        <ProductImgWrapper isDisabled={!inStock}>
          <ProducImg src={this.props.gallery[0]} alt="Thumbnail" />
          {outOfStock}
        </ProductImgWrapper>
      </>
    );
  }
}
export default PdpImageContainer;
