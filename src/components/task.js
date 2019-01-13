import React from 'react';
import axios from 'axios';

class TaskList extends React.Component {
    handleLike =(e, index)=> {
        e.target.parentNode.classList.toggle("done")
        e.target.parentNode.classList.toggle("active")
        // let hasAction = e.target.classList.contains("action")
        let id = this.props.info[index].id
        console.log(id)
            axios
            .post("http://localhost:8000/api/saveCheck", {
                data: id
            })
            .then(res=> {
            console.log(res)
            })
        // console.log(info[0].content)
    }
    handleDel =(e,index)=> {
        let info = this.props.info
        console.log(index)
        let id = this.props.info[index].id
        axios
        .post("http://localhost:8000/api/delTask", {
            data: id
        })
        .then(res=> {
            console.log(res)
            info.splice(index, 1)
            this.setState({
                info: info
            });
        })
        console.log(info)
    }

    sendSlack() {
        axios
        .post('http://localhost:8000/api/sendSlack')
        .then(res => {
            console.log(res)
        })
    }
    render() {
        return(
            <div className="">
                <div className="main-task">
                    <ol>
                        {this.props.info.map((item, index) =>
                            <li key={index} className={item.like_count}>
                                <button className="check-button" onClick={(e) => this.handleLike(e, index)}>Done</button>
                                {item.content}
                                <button className="del-button" onClick={(e) => this.handleDel(e, index)}>Delete</button>
                            </li>
                        )}
                    </ol>
                </div>
                <div>
                    <button className="send-to-slack-button" onClick={this.sendSlack}>Send to Slack</button>
                </div>
            </div>
        )
    }
}
export default TaskList;
// onLoad={(e) => this.likeCount(e, item)}