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
  handleDeleteList = () => {
    var titles = this.state.title
    var last_index = titles.length-1
    titles.splice(last_index, 1)
    console.log(titles)
    this.setState({
      title : titles
    });
  }
  render() {
    return (
      <div className="wrapper">
        <h1>Diary</h1>
        <Input addList={this.handleAddList} deleteList={this.handleDeleteList}/>
        <TaskList todoTitles={this.state.title}/>
      </div>
    );
  }
}

export default App;
