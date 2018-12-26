import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Input from './components/input.js'
import Button from './components/button.js'
import TaskList from './components/task.js'

class Login extends Component {

  handleLogin = () => {
    var email = document.getElementById("emaill").value;
    var pass = document.getElementById("passs").value;
    
    if(email === "a@a.com" && pass === "a") {
      alert(" something")
    } else {
      alert("wrong something")
    }

  }
  render() {
    return (
      <div className="wrapper">
        <p>Diary</p>
        <p>Welcome back!</p>
        <form id="login-form" name="mainForm">
          <div>
            <p>Email:</p>
            <input id="emaill" type="email" name="email"/>
          </div>
          <div>
            <p>Pasword:</p>
            <input id="passs" type="password" name="password"/>
          </div>
          <div>
            <input type="submit" value="Submit" onClick={this.handleLogin}/>
          </div>
        </form>
        <p><Link to="/diary/">Diary</Link></p>
      </div>
    );
  }
}
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

class App extends React.Component {
render(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/diary" component={Diary}/>
      </Switch>
    </Router>
  )}
}

export default App;
