import React from "react";
import "./style.css";
import Icon from "../Icon";
import classNames from 'classnames';


const Chip = ({standart5,onclick,onclose1,myIcon,children,text, iconProps}) =>{
     let classes4  = classNames(
        {'start5': standart5},
       
    );
    return(
    
<button className={classes4}  onClose={onclose1} onClick={onclick}>
    
    {!!myIcon===true && <Icon iconName={myIcon} ></Icon>}
    {children || text}
    </button>
   )
}
export default Chip;