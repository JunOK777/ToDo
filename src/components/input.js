import React from 'react';

// input
class TaskInput extends React.Component {
    render() {
        return(
            <div className="grid">
                <p>Task:</p>
                <div className="task-box">
                    <input id="content" name="task" className="input-common"></input>
                </div>
            </div>
        )
    }
}


export default TaskInput;