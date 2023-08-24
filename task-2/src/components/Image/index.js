import React from "react";
import "./style.css";
import classNames from 'classnames';

const Image = ({src, alt='Image', height,width, onclick=()=>{console.log('image')},className,objectFit='none',...props}) => {
    let classes  = classNames(
        {[`${className}`]: className},
        {[`${className}`]: objectFit},  
    );
    return (
        <img  className={classes} 
        src={src} 
        alt={alt} 
        height={height} 
        width={width} 
        onClick={onclick} 
        object-fit={objectFit}
        style={{
            display: "block",
            position: "absolute",
          }}
        {...props}>
        </img>
    )
};
export default Image;