import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';
const Button1 = ({standart,children}) =>{
     let classes1  = classNames(
        {'start': standart}
    );
    return(
    
<button className={classes1}><Icon iconName={"car"} ></Icon>{children}</button>
   )
}
export default Button1;