import React from "react";
import styled from "styled-components";

const Container = styled.div`
box-sizing: content-box;
max-width: 1238px;
padding: 23px 101px 0px;
margin: 0 auto;
`;

class PageContainer extends React.Component{
    render(){
        const {children, ...props} = this.props;
        return <Container {...props}>{children}</Container>
    }
}

export default PageContainer;