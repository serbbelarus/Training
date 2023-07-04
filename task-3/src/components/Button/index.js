import React from "react";
import classNames from 'classnames';
import "./style.css";
import Icon from "../Icon";

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
            <Icon  iconName={"cloud"} size={"2xl"} className={'icon1'} style={{margin:15}}   
      ></Icon>
        </button>
        
    )
   
}

export default Button;