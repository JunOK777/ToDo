import React, { Component } from 'react'
import './App.css'
import Input from './components/input.js'
import TaskList from './components/task.js'

class App extends Component {
  state = {
    title : []
  }

  handleAddList = (name) => {
    var todoItems = this.state.title
    todoItems.push(name)
    this.setState({
      title: todoItems
    })
  }
  
  render() {
    return (
      <div className="wrapper">
        <h1>Diary</h1>
        <Input addList={this.handleAddList} />
        <TaskList todoTitles={this.state.title}/>
      </div>
    );
  }
}

export default App;
