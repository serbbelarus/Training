import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';
const Button2 = ({standart2,ShowIcon,children}) =>{
     let classes2  = classNames(
        {'start2': standart2}
    );
    console.log(ShowIcon);
    return(
        
        <button className={classes2}>
            {ShowIcon===true && <Icon iconName={"car"}></Icon>} 
            {children}
        </button>
   )
}
export default Button2;