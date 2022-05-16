import React, { useMemo } from 'react';
import './Button.css';

const Button = ({ className, text, onClick }) => {
    return useMemo(() => (
        <button onClick={onClick} type='button' className={className}>{text}</button> 
    ), [ className, text])
}

export default Button;