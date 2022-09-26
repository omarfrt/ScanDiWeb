import React from "react";
import Header from "../components/header";
import ProductCardContainer from "../components/productCartContainer";
import * as Typography from "../components/typography";
import Styles from "../styles/category.module.css";
class Category extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={Styles.wrapper}>
          <Typography.H2> Category Name </Typography.H2>
          <ProductCardContainer />
        </div>
      </div>
    );
  }
}

export default Category;
