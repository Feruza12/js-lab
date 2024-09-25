import React from 'react';
import classes from './MyInput.module.css'

// Управляемый компонент
const MyInput = (props) => {
  return (
    <input {...props} className={classes.myInput} />
  );
};

// Неуправляемый\Неконтролируемый компонент
// const MyInput = React.forwardRef((props, ref) => {
//   return (
//     <input ref={ref} {...props} className={classes.myInput} />
//   );
// });

export default MyInput;