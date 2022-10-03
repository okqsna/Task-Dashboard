import React from "react";
import './Calendar.css';
export class Calendar extends React.Component {
    constructor() {
        super();

        const today = new Date(),
            date = today.getDate() + '.'+(today.getMonth() + 1) + '.' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='Calendar'>
                <p>date - {this.state.date}</p>
            </div>
        );
    }
}
export default Calendar;