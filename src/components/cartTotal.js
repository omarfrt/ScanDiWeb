import React from "react";
import* as Typography from "./typography"
import Styles from "../styles/cartTotal.module.css"

class CartTotal extends React.Component{
    render(){
        return(
            <div className={Styles.wrapper}>
                <div className={Styles.tax}>
                   <Typography.SPrice>Tax 21%: </Typography.SPrice> 
                   <Typography.Price>$ 42.00</Typography.Price>
                </div>
                <div className={Styles.quantity}>
                <Typography.SPrice>Quantity: </Typography.SPrice> 
                <Typography.Price>3</Typography.Price>
                </div>
                <div className={Styles.total}>
                <Typography.SPrice>Total: </Typography.SPrice> 
                <Typography.Price>$200.00</Typography.Price>
                </div>
                <div className={Styles.order_button}>
                    <button> ORDER </button>
                </div>
            </div>
        )
    }
}

export default CartTotal;