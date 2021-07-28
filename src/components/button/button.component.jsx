import React from 'react';

import './button.styles.css';

const Button = props => (
    <button
        className='button' 
        onClick={props.action}
    >
        {props.text}
    </button>
)

export default Button;