import React from "react";
import Styles from "../styles/productCardContainer.module.css";
import ProductCard from "./productCard";

class ProductCardContainer extends React.Component {
  render() {
    return (
      <div className={Styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    );
  }
}

export default ProductCardContainer;
