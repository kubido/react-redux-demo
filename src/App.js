import React, { Component } from 'react';
import './App.css';

import Todo from './components/Todo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
      todos: [
        {name: "Ngoding"},
        {name: "Makan"}
      ]
    }  
  }

  handleChange(value){
    this.setState({
      currentValue: value
    })
  }

  addTodo(){
    const todoValue = this.state.currentValue

    const newTodos = this.state.todos
    newTodos.push({name: todoValue})
    this.setState({
      todos: newTodos
    })
  }

  removeTodo(idx){    
    const newTodos = this.state.todos
    console.log(idx)
    newTodos.splice(idx, 1)
    this.setState({
      todos: newTodos
    })
  }

  render() {

    return (
      <div>
        <p> current_value : { this.state.currentValue }</p>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button onClick={ () => this.addTodo() }>Add</button>
        <Todo todos={this.state.todos} udinFunction={(idx) => this.removeTodo(idx)}/>
      </div>
    );
  }
}



export default App;
