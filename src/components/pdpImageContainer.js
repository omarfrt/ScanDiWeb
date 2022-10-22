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
`;
const ProducImg = styled.img`
  width: 610px;
  height: 511px;
`;

class PdpImageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Wrapper>
          {this.props.gallery.map((item, index) => (
            <>
              <Thumbnail src={item} alt="Thumbnail" />
            </>
          ))}
        </Wrapper>
        <div>
          <ProducImg src={this.props.gallery[0]} alt="Thumbnail" />
        </div>
      </>
    );
  }
}
export default PdpImageContainer;
