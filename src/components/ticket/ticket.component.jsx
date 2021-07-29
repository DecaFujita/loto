import React from 'react';

import Ball from '../ball/ball.components';
import Button from '../button/button.component';

import './ticket.styles.css';

class Ticket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numbers: [0, 0, 0, 0, 0, 0]
        }
    }

    selector = () => {
        let selectedNumbers = [];
        while (selectedNumbers.length < this.props.maxNum) {
            let randNumber = Math.ceil(Math.random() * this.props.allNum);
            let filteredNumber = selectedNumbers.filter(n => n === randNumber)
            if (filteredNumber.length === 0) {
                selectedNumbers.push(randNumber)
            }
        }
        this.setState({numbers: selectedNumbers})
    }

    render() {
        return(
            <div className='ticket'>
                <h1 className='ticket-title'>{this.props.title}</h1>
                <div className='ticket-row'>
                {this.state.numbers.map(number => (
                    <Ball number={number} />
                ))}
                </div>
                <Button text='Generate' action={this.selector}/>
            </div>
        )
    }
}

export default Ticket;