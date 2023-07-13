import classNames from "classnames";
import "./style.css";

 const  Icon = ({iconName, size, onClick,icon1,icon2,...props }) => {
    let xer = `fa-solid `;

    if (iconName) {
        xer += `fa-${iconName}`
    }
    if (size) {
        xer += `fa-${size}`
    }
    const className = classNames(
        'fa-solid',
        {'icon1': icon1},
        {'icon2': icon2},
        { 
            [`fa-${iconName}`]: iconName,
            [`fa-${size}`] : size
        },
       
    );
    return (
       <i className={className} onClick={onClick} ></i>
    )
 }
 export default Icon;