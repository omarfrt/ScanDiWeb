import React from "react";
import * as Typography from "../components/typography"
import Styles from "../styles/product.module.css"

class Product extends React.Component{
    render(){
        return(
            <div className={Styles.wrapper}>
                <div className={Styles.image}>

                <img src="./Image.png" alt="Product" width={"610px"} height={"511px"} />
                </div>
                <div>
                    <div className={Styles.title}>
                    <Typography.P1title> Apollo</Typography.P1title>
                    <Typography.P2title> Running Short</Typography.P2title> 
                    </div>
                    <div className={Styles.size}>
                    <Typography.Size>Size:</Typography.Size>
                    </div>
                    <div className={Styles.color}>
                    <Typography.Size>Color:</Typography.Size>
                    </div>
                    <div className={Styles.price}>
                    <Typography.Size>Price:</Typography.Size>
                    <Typography.Price>50.00$</Typography.Price>
                    </div>
                    <div className={Styles.button}>
                        <button>ADD TO CART</button>
                    </div>
                    <div className={Styles.description}>
                        <Typography.Description>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</Typography.Description>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;