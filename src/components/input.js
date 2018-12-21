import React from 'react';

// add
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
                <DeleteButton deleteList = {this.props.deleteList}/>
            </div>
        )
    }
}
// delete
class DeleteButton extends React.Component {
    render() {
        return(
            <div className="delete-button-box">
                <input className="delete-button" type="button" value="delete" onClick={this.props.deleteList} />
            </div>
        )
    }
}


export default Input;