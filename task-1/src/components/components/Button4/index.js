import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';
const Button4 = ({standart4,myIcon,children,text}) =>{
     let classes4  = classNames(
        {'start4': standart4}
    );
    return(
    
<button className={classes4} >
    {!!myIcon===true && <Icon iconName={myIcon} ></Icon>}
    {children || text}
    </button>
   )
}
export default Button4;