import React from "react";
import "./style.css";
import classNames from 'classnames';

const Image = ({src, alt='Image', height,width, onclick=()=>{console.log('image')},...props}) => {
    return (
        <img src={src} alt={alt} height={height} width={width} onClick={onclick}  {...props}></img>
    )
};
export default Image;