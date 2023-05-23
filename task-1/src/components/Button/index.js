import React from "react";
import classNames from 'classnames';

import "./style.css";

// написать красивые стили для кнопок: (primary, secondary: true/false)
// сделать так чтобы на disabled менялся стиль кнопки
// если loading то стили такие как и на disabled

// принимать в себя и стили и название класса 

// поудалять лишнее
// разобраться как комитить только некоторые файлы а не все сразу

// Вместо текста добавіть спіннер
// напісать функцію чтобы после кліка кнопка становілась loading, а через 5 секунд опять обычной

const Button = ({children, onClick, secondary, disabled, loading,style}) => {


let className = classNames('primary',{'secondary': secondary}, {'disabled' : disabled,loading}, {'style' : style});

    return (
        <button onClick={onClick} className={className} disabled={disabled || loading} >
            {loading ? 'Загрузка...' : children}
        </button>
    )
}

export default Button;