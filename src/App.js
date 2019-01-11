import React, { Component,Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Input from './components/input.js'
import Button from './components/button.js'
import TaskList from './components/task.js'
import axios from 'axios';
import logo from './logo.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get('http://localhost:8000/api/test')
      .then(results => {
        const data = results.data;
        console.log(data);
        this.setState({
          tasks: [...data]
        });
      });
  }


  onFormSubmit = (e) => {
    e.preventDefault()
    var email_value = document.getElementById("emaill").value;
    var pass_value = document.getElementById("passs").value;
    axios.post('http://localhost:8000/api/login', {
      email: email_value,
      password: pass_value      
    })
    .then(res => {
      const data = res.data;
      console.log(data);
      this.setState({
        tasks: [...data]
      });
    });
  }
  render() {
    const tasks = this.state.tasks.map(task => {
      return <li key={task.id}>{task.title}</li>;
    });
    return (
      <div className="wrapper">
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <div>
          <button onClick={this.getData}>getData</button>
          <ul>
            {tasks}
          </ul>
        </div>
      </Fragment>
        <p>Diary</p>
        <p>Welcome back!</p>
        <form id="login-form" name="mainForm" onSubmit={(e) => this.onFormSubmit(e)}>
          <div>
            <p>Email:</p>
            <input id="emaill" type="email"/>
          </div>
          <div>
            <p>Pasword:</p>
            <input id="passs" type="password"/>
          </div>
          <div>
            <input type='submit' />
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
  componentWillMount(){
    var info = this.state.info
    axios
      .get("http://localhost:8000/api/getFavorite")
      .then(res=> {
        let data = res.data;
        if(data === 0){
          document.getElementById("likeCount").classList.add('action')
        } else if(data === 1) {
          document.getElementById("likeCount").classList.remove('action')
        }
      })
    axios
      .get("http://localhost:8000/api/getAllTasks")
      .then(res=> {
        console.log(res)
        res.data.forEach(function( value ) {
          let old_info = {
            id: value.id,
            name: value.task_name,
            content: value.task_body,
            like_count: value.like_count
          }
          info.push(old_info)
        })
        this.setState({
          info: info
        })
      })
  }
  handleAddInfo = (name, content) => {
    var info = this.state.info
    var new_info = {
      name: name,
      content: content,
    }
    info.push(new_info)
    this.setState({
      info: info
    })
    axios.post('http://localhost:8000/api/saveTask', {
      data: new_info,
    })
  }
  handleDeleteList = () => {
    var info = this.state.info
    var last_index = info.length-1
    info.splice(last_index, 1)
    this.setState({
      info: info
    });
    axios
      .get("http://localhost:8000/api/deleteTask")
  }
  changeClass = () => {
    let getClass = document.getElementById("likeCount");
    if(getClass.classList.contains("action")){
      axios
        .get("http://localhost:8000/api/removeFavorite")
        .then(res=> {
          console.log(res)
        })
    } else {
      axios
        .get("http://localhost:8000/api/addFavorite")
        .then(res=> {
          console.log(res)
        })
    }
    document.getElementById("likeCount").classList.toggle("action")
  }
  render() {
    return (
      <div className="wrapper">
        <h1>Diary</h1>
        <Input />
        <Button addList={this.handleAddInfo} deleteList={this.handleDeleteList}/>
        <TaskList info={this.state.info} />
        <div className="testWrapper">
          <div>
            <button className="testButton" onClick = {this.changeClass}><i className="fas fa-heart"></i></button>
            <p id="likeCount">LIke</p>

          </div>
        </div>
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
