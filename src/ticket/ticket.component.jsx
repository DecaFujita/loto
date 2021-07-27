import React from 'react';

import Ball from '../ball/ball.components'

import './ticket.styles.css';

const Ticket = props => {
    // let maxNum = props.maxNum
    let numbers =[];
    for (let j = 0; j < props.maxNum; j++) {
        numbers.push(j);
        
    }
    return(
        <div>
        {numbers.map(number => (
            <Ball number={number} />
        ))}
        </div>

    )
};

export default Ticket;