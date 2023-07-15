import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';
const Button1 = ({Children,text, standart}) =>{
     let classes1  = classNames(
        {'start': standart}
    );
    return(
    
<button1 className={classes1}><Icon></Icon></button1>
   )
}
export default Button1;