import React from 'react';

class TaskList extends React.Component {
    render() {
        return(
            <div className="">
                <ol>
                    {this.props.todoTitles.map((todoItem) =>
                        <li>{todoItem}</li>
                    )}
                </ol>
            </div>
        )
    }
}

export default TaskList;