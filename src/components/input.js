import React from 'react';

class Input extends React.Component {
    handleFormSubmit = (e) => {
        e.preventDefault()
        var value = document.getElementById("item").value
        this.props.addList(value)
    }

    render() {
        return(
            <div className="input-box">
                <p>Add:</p>
                <form onSubmit={this.handleFormSubmit}>
                    <input id="item" type="text" />
                    <input className="add-button" type="submit" value="Add"></input>
                </form>
            </div>
        )
    }
}


export default Input;