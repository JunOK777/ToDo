import React, { Component } from 'react'
import './App.css'
import Input from './components/input.js'
import Button from './components/button.js'
import TaskList from './components/task.js'

class Diary extends Component {
  state = {
    info: [],
  }
handleAddInfo = (name, pic, date) => {
  var info = this.state.info
  var new_info = {
    name: name,
    pic: pic,
    date: date
  }
  info.push(new_info)
  this.setState({
    info: info
  })
}
handleDeleteList = () => {
  var info = this.state.info
  var last_index = info.length-1
  info.splice(last_index, 1)
  console.log(info)
  this.setState({
    info : info
  });
}
render() {
  return (
    <div className="wrapper">
      <h1>Diary</h1>
      <Input />
      <Button addList={this.handleAddInfo} deleteList={this.handleDeleteList}/>
      <TaskList info={this.state.info} />
    </div>
  );
}
}

export default Diary;
