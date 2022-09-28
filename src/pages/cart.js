import React from "react";
import CartItem from "../components/cartItem";
import Header from "../components/header";
import Styles from "../styles/cart.module.css"
import * as Typography from "../components/typography"
import CartTotal from "../components/cartTotal";
class Cart extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={Styles.wrapper}>
                    <div className={Styles.page_title}>
                <Typography.H2>Cart</Typography.H2>
                    </div>
                <div className={Styles.cart_items}>     
                <CartItem/>
                <CartItem/>
             
                    </div>
                <div>
                    <CartTotal/>
                    </div>    
                </div>
            </div>
        )
    }
}
export default Cart;