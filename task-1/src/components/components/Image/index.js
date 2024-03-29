import React from "react";
import "./style.css";
import classNames from 'classnames';

const Image = ({src, alt='Image', height,width, onclick=()=>{console.log('image')},className,...props}) => {
    let classes  = classNames(
        {[`${className}`]: className},
        
    );
    return (
        <img  className={classes} 
        src={src} 
        alt={alt} 
        height={height} 
        width={width} 
        onClick={onclick} 
        
        style={{
            display: "block",
            position: "absolute",
          }}
        {...props}>
        </img>
    )
};
export default Image;