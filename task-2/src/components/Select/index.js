import React from "react";
import "./style.css";
import classNames from 'classnames';

const Select = ({className,options,...props}) => {
    
    let classes  = classNames(
        {[`${className}`]: className},  
    );
    return (
        <div>
        <h1>Сountries</h1>
        <label>
        <select className={classes} options={options}  defaultValue="Belarus" >
        <option value="Germany">Germany</option>
        <option value="Russia">Russia</option>
        <option value="Belarus">Belarus</option>
        </select>
        </label>
        </div>
    )
};
export default Select;