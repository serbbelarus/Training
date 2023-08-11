import classNames from "classnames";
import "./style.css";

 const Icon = ({iconName, size, onClick, icon1,icon2,...props }) => {
    console.log(iconName, size);
    let xer = `fa-solid `;

    if (iconName) {
        xer += `fa-${iconName}`
    }
    if (size) {
        xer += `fa-${size}`
    }

    console.log('xer', xer);

    const className = classNames(
        'fa-solid',
        {'icon1': icon1},
        {'icon2': icon2},
        { 
            [`fa-${iconName}`]: iconName,
            [`fa-${size}`] : size
        },
       
    );

        console.log('className', className);

        

    return (
       <i className={className} onClick={onClick} ></i>
    )
 }
 export default Icon;