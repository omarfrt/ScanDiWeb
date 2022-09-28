import React from "react";
import * as Typography from "../components/typography"
import Styles from "../styles/cartItem.module.css"

class CartItem extends React.Component{
    render(){
        return(
            
            <div className={Styles.wrapper}>
                <div>
                <div className={Styles.title}>
                    <Typography.P1title> Apollo</Typography.P1title>
                    <Typography.P2title> Running Short</Typography.P2title> 
                    </div>
                    <div className={Styles.price}>
                    <Typography.Price>50.00$</Typography.Price>
                    </div>
                    <div className={Styles.size}>
                    <Typography.Size>Size:</Typography.Size>
                    </div>
                    <div className={Styles.color}>
                    <Typography.Size>Color:</Typography.Size>
                    </div>
                </div>
                <div className={Styles.image}>
                    <img src="./Image.png" alt="Product" width={"200px"} height={"288px"} />
                </div>
            </div>
               
        )
    }
}
export default CartItem;