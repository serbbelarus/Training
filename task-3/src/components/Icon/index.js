import classNames from "classnames";
import "./style.css";

 const Icon = ({iconName, size, onClick,...props }) => {
    console.log(iconName, size);
    let xer = `fa-solid `;

    if (iconName) {
        xer += `fa-${iconName}`
    }
    if (size) {
        xer += `fa-${size}`
    }

    console.log('xer', xer);

    const className1 = classNames(
        'fa-solid',
        { 
            [`fa-${iconName}`]: iconName,
            [`fa-${size}`] : size
        },
       
    );

        console.log('className', className1);

        

    return (
       <i className={className1} onClick={onClick} ></i>
    )
 }
 export default Icon;