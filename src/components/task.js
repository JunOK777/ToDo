import React from 'react';
import axios from 'axios';

class TaskList extends React.Component {
    handleLike =(e, index)=> {
        e.target.classList.toggle("action")
        // let hasAction = e.target.classList.contains("action")
        let id = this.props.info[index].id
        console.log(id)
            axios
            .post("http://localhost:8000/api/saveLike", {
                data: id
            })
            .then(res=> {
            console.log(res)
            })
        // console.log(info[0].name)
    }
    // likeCount=(e,item)=>{
    //     console.log(item)
    //     if(item.like_count === 1){
    //         e.target.classList.add("action")
    //     }
    // }
    render() {
        return(
            <div className="">
                <ol>
                    {this.props.info.map((item, index) =>
                        <li key={index}>{item.name},{item.content} <button className={item.like_count+ " " + "like-button"}  onClick={(e) => this.handleLike(e, index)}>like</button></li>
                    )}
                </ol>
            </div>
        )
    }
}
export default TaskList;
// onLoad={(e) => this.likeCount(e, item)}