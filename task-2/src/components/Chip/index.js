import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';

const Chip = ({onClose,standart5,onClick,myIcon,children,text,iconProps}) =>{
    
     let classes4  = classNames(
        {'start5': standart5},
    );
    return(
<div className={classes4} 
onClose={onClose}
onClick={onClick}>
    {!!myIcon===true && <Icon iconName={myIcon} ></Icon>}
    {children || text}
    </div>
   )
}
export default Chip;