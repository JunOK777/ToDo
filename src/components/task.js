import React from 'react';

class TaskList extends React.Component {
    render() {
        return(
            <div className="">
                <ol>
                    {this.props.info.map((item) =>
                        <li>{item.name},{item.pic},{item.date}</li>
                    )}
                </ol>
            </div>
        )
    }
}

export default TaskList;