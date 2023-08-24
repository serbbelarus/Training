import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';

const Chip = ({onClose,onClick,className,myIcon,children,text,iconProps}) =>{
    
     let classes4  = classNames(
        {[`${className}`]: className},
    );
    return(
<div className={classes4} 
onClose={onClose}
onClick={onClick}>
    {!!myIcon===true && <Icon iconName={myIcon} ></Icon>}
    {children || text}
    {onClose && <Icon iconName={'close'} onClick={onClose}></Icon>}
   
    </div>
   )
}
export default Chip;