import classNames from "classnames";
import "./style.css";

// Добавить props className +
// Добавить обработчик onClick +
// Добавить props style +

 const Icon = ({iconName, size, onClick, className, style1, style2, ...props }) => {
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
        {'className': className},
        {'style1': style1},
        {'style2': style2}
    );

        console.log('className', className1);

        

    return (
       <i className={className1} onClick={onClick} style1={'style1'} style2={'style2'}></i>
    )
 }
 export default Icon;