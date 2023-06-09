import React from "react";
import classNames from 'classnames';
import "./style.css";

const Button = ({onBtnPress, secondary, disabled, loading, className, text, children}) => {

let classes = classNames(
    'primary',
    {'secondary': secondary},
    {'disabled' : disabled || loading},
    {[`${className}`]: className}
    );
    
    return (
        <button onClick={onBtnPress} className={classes} disabled={disabled} >
            {loading ? 'Загрузка...' : children && text}
        </button>
    )
}

export default Button;