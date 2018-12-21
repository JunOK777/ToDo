import React from 'react';

// input
class Input extends React.Component {
    render() {
        return(
            <div className="input-box">
                <p>New Tasks:</p>
                <NameField />
                <PICField />
                <DateField />
            </div>
        )
    }
}

class NameField extends React.Component {
    render() {
        return(
            <div className="grid-box">
                <p>Name:</p>
                <input id="name" className="input-common"></input>
            </div>
        )
    }
}

class PICField extends React.Component {
    render() {
        return(
            <div className="grid-box">
                <p>PIC:</p>
                <input id="pic" className="input-common"></input>
            </div>
        )
    }
}

class DateField extends React.Component {
    render() {
        return(
            <div className="grid-box">
                <p>Date:</p>
                <input id="date" className="input-common"></input>
            </div>
        )
    }
}

export default Input;