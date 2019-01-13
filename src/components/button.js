import React from 'react';

// buttons
class Button extends React.Component {
    render() {
        return(
            <div className="button-box">
                <AddButton addList={this.props.addList}/>
            </div>
        )
    }
}

// add
class AddButton extends React.Component {
    handleFormSubmit = (e) => {
        e.preventDefault()
        var content = document.getElementById("content").value
        this.props.addList(content)
    }
    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input className="add-button" type="submit" value="Add"></input>
            </form>
        )
    }
}
export default Button;