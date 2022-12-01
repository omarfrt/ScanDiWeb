import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  height: 288px;
  position: relative;
`;
const Thumbnail = styled.img`
  width: 200px;
  height: 288px;
`;
const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
const SliderButton = styled.button`
  width: 24px;
  height: 24px;
  left: 56px;
  top: 0px;
  color: white;

  background: rgba(0, 0, 0, 0.73);
`;

export default class CartImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  handleNextSlide = () => {
    this.setState({
      current:
        this.state.current === this.props.gallery.length - 1
          ? 0
          : this.state.current + 1,
    });
  };
  handlePrevSlide = () => {
    this.setState({
      current:
        this.state.current === 0
          ? this.props.gallery.length - 1
          : this.state.current - 1,
    });
  };
  render() {
    const imgsrc = this.props.gallery;
    return (
      <Wrapper>
        <SliderWrapper>
          {console.log(imgsrc.length)}
          {imgsrc.length !== 1 ? (
            <SliderButton onClick={this.handlePrevSlide}>{"<"}</SliderButton>
          ) : null}
          {imgsrc.length !== 1 ? (
            <SliderButton onClick={this.handleNextSlide}>{">"}</SliderButton>
          ) : null}
        </SliderWrapper>
        <Thumbnail src={imgsrc[this.state.current]} alt="thumbnail" />
      </Wrapper>
    );
  }
}
