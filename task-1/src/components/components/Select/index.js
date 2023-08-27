import React from "react";
import "./style.css";
import classNames from 'classnames';

const Select = ({className,...props}) => {
    
    let classes  = classNames(
        {[`${className}`]: className},  
    );
    return (
        <div className={classes} ></div>
    )
};
export default Select;