import React from 'react';

// buttons
class Button extends React.Component {
    render() {
        return(
            <div className="button-box">
                <p>Push:</p>
                <AddButton addList={this.props.addList}/>
                <DeleteButton deleteList={this.props.deleteList}/>
            </div>
        )
    }
}

// add
class AddButton extends React.Component {
    handleFormSubmit = (e) => {
        e.preventDefault()
        var name = document.getElementById("name").value
        var content = document.getElementById("content").value
        this.props.addList(name, content)
    }
    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input className="add-button" type="submit" value="Add"></input>
            </form>
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


export default Button;