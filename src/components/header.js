import React from "react";
import * as Typography from "./typography"
import Styles from "../styles/header.module.css"

class Header extends React.Component {
    render() {
        return (
            <div className={Styles.header}>
                <div className={Styles.header_navigation_container}>
                    <Typography.SmallB> Women </Typography.SmallB>
                    <Typography.Small> Men </Typography.Small>
                    <Typography.Small> Kids </Typography.Small>
                </div>
                <div>
                <img src="/a-logo.svg" alt="Logo" />
                </div>
                <div className={Styles.header_Action_container}>
                   
                    <img src="/$v.svg" alt="Currancy" />

                    <img src="/cart.svg" alt="cart" />
                    
                </div>
             
            </div>
            );
    }
  }

  export default Header;