import React from 'react';

import Ball from '../ball/ball.components'
import Button from '../button/button.component';

import './ticket.styles.css';


const Ticket =({allNum, maxNum, title}) => {
    let selectedNumbers = [];
    while (selectedNumbers.length < maxNum) {
        let randNumber = Math.ceil(Math.random() * allNum);
        let filteredNumber = selectedNumbers.filter(n => n === randNumber)
        if (filteredNumber.length === 0) {
            selectedNumbers.push(randNumber)
        }  
    }
    
    return(
        <div className='ticket'>
            <h1 className='ticket-title'>{title}</h1>
            <div className='ticket-row'>
            {selectedNumbers.map(number => (
                <Ball number={number} />
            ))}
            </div>
            <Button text='Generate' action={selector}/>
        </div>
    )
};

export default Ticket;