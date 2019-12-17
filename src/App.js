import React, { Component } from 'react';
import Todos from './components/Todos' 

import './App.css';

class App extends Component {
  state = {
    todos: [ 
      {
        id: 1,
        title: 'Take trash out',
        completed: false
      },
      {
        id: 2,
        title: 'Fixing the car',
        completed: true
      },
      {
        id: 3,
        title: 'Shopping',
        completed: true
      }
    ]
  }
  render() {

    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
