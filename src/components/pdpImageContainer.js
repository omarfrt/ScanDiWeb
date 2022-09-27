import React from "react";
import PdpImage from "./pdpImage";
import Styles from "../styles/pdpImageContainer.module.css"

class PdpImageContainer extends React.Component{
    render(){
        return(
            <div className={Styles.wrapper}>
                <PdpImage/>
                <PdpImage/>
                <PdpImage/>
            </div>
        )
    }
}
export default PdpImageContainer;