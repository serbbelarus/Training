import React from "react";
import classNames from 'classnames';
import "./style.css";
import Icon from "../Icon";

const Button = ({onBtnPress, secondary, disabled, loading, className, text, children,IconName}) => {

let classes = classNames(
    'primary',
    {'secondary': secondary},
    {'disabled' : disabled || loading},
    {[`${className}`]: className}
    );
    
    return (
        <button onClick={onBtnPress} className={classes} disabled={disabled} >
            {loading ? 'Загрузка...' : children || text}
            {IconName  && <Icon iconName={IconName}></Icon>}
        </button>
    )
}

export default Button;