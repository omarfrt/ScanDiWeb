import React, { Component } from "react";
import styled from "styled-components";

const Thumbnail = styled.img`
  width: 200px;
  height: 288px;
`;

export default class CartImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const imgsrc = this.props.gallery[0];
    return <Thumbnail src={imgsrc} alt="thumbnail" />;
  }
}
