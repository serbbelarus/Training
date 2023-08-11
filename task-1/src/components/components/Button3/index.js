import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';
const Button3 = ({standart3,myIcon,children}) =>{
     let classes3  = classNames(
        {'start3': standart3}
    );
    return(
    
<button className={classes3} >
    {!!myIcon===true && <Icon iconName={myIcon} ></Icon>}
    {children}
    </button>
   )
}
export default Button3;