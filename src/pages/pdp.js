import React from 'react';
import Header from '../components/header';
import Product from '../components/product';
import PdpImageContainer from '../components/pdpImageContainer';
import Styles from "../styles/pdp.module.css"


class Pdp extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={Styles.wrapper}>
                <PdpImageContainer/>
                <Product/>

                </div>
            </div>
        )
    }
}


export default Pdp;