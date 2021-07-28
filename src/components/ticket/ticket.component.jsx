import React from 'react';

import Ball from '../ball/ball.components'
import Button from '../button/button.component';

import './ticket.styles.css';


let allNumbers = [];
let selectedNumbers = [];

const allNums = (maxNum) => {
    for (let i = 0; i < maxNum; i++ ) {
        allNumbers.push(i + 1);
    }
}

const selector = (allNum, maxNumber) => {
    let i = allNum;
    while (selectedNumbers.length < maxNumber) {
        let index = Math.floor(Math.random() * i)
        console.log('index', index)
        selectedNumbers.push(allNumbers[index]);
        allNumbers.splice(index, 1);
        i--;
    }   
}

const Ticket =({allNum, maxNum}) => {
    allNums(allNum);
    selector(allNum, maxNum);
    return(
        <div className='ticket'>
            <h1 className='ticket-title'>Loto</h1>
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