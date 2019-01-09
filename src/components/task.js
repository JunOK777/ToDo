import React from 'react';

class TaskList extends React.Component {
    handleLike =(e)=> {
        e.target.classList.toggle("action")
    }
    render() {
        return(
            <div className="">
                <ol>
                    {this.props.info.map((item) =>
                        <li>{item.name},{item.content} <button onClick = {this.handleLike} id="like-buttonid" className="like-button">like</button></li>
                    )}
                </ol>
            </div>
        )
    }
}
export default TaskList;