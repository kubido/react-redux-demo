import React, { Component } from 'react';
import './App.css';

import Todo from './components/Todo'
import store from './store'
import { add_todo } from './actions/TodoActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
      todos: store.getState().todos
    }  

    store.subscribe(() => {
      this.setState({
        todos: store.getState().todos
      })
    })
  }

  handleChange(value){
    this.setState({
      currentValue: value
    })
  }


  render() {

    return (
      <div>
        <p> current_value : { this.state.currentValue }</p>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button onClick={ () => store.dispatch(add_todo(this.state.currentValue)) }>Add</button>
        <Todo/>
      </div>
    );
  }
}



export default App;
