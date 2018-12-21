import React from 'react';

// buttons
class Button extends React.Component {
    

    render() {
        return(
            <div className="button-box">
                <p>Add:</p>
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
        var pic = document.getElementById("pic").value
        var date = document.getElementById("date").value
        console.log(name)
        
        this.props.addList(name, pic, date)
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