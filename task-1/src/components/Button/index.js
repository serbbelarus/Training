import React from "react";
import classNames from 'classnames';
import "./style.css";

// есть 2 переменные. прі нажатіі на кнопку счітать сумму этіх переменных і выводіть в кнопе

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