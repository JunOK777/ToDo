import React from 'react';

// input
class Input extends React.Component {
    render() {
        return(
            <div className="input-box">
                <p>New Tasks:</p>
                <NameField />
                <ContentField />
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

class ContentField extends React.Component {
    render() {
        return(
            <div className="grid-box">
                <p>task:</p>
                <input id="content" className="input-common"></input>
            </div>
        )
    }
}

export default Input;