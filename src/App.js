import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import Todos from './components/Todos' ;
import AddTodos from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import uuid from 'uuid';


import './App.css';

class App extends Component {
  state = {
    todos: [ 
      {
        id: uuid.v4(),
        title: 'Take trash out',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Fixing the car',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Shopping',
        completed: false
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed =!todo.completed
      }
      return todo
    })})
  }
  //Delete todo
  delTodo = ( id ) =>{
    this.setState ({todos: [...this.state.todos.filter((todo) => todo.id !== id)] })
  }

  //Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodos addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
