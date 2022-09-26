import React from "react";
import * as Typography from "./typography";
import Styles from "../styles/productCard.module.css"

class ProductCard extends React.Component{
    render(){
        return(
                <div className={Styles.card}>
                    <div className={Styles.card_body}>
                        <img src="/image.png" alt="Product" />
                        <Typography.PL>Apollo Running Short</Typography.PL>
                        <Typography.PM>$50.00</Typography.PM>
                    </div>
                       
                </div>


        )
    }



}

export default ProductCard;