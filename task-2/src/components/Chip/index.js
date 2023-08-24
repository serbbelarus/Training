import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';

const Chip = (props) =>{
    const {onClose,onClick,className,myIcon,children,text,iconProps} = props;

     let classes4  = classNames(
        {[`${className}`]: className},
    );
    return(
<div className={classes4} 
onClose={onClose}
onClick={onClick}>
    {!!myIcon===true && <Icon iconName={myIcon} {...iconProps} ></Icon>}
    {children || text}
    {onClose && <Icon iconName={'close'} onClick={onClose}></Icon>}
   
    </div>
   )
}
export default Chip;