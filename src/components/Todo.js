import React, {Component} from 'react'

import store from '../store'
import { remove_todo } from '../actions/TodoActions'

export default class Todo extends Component {
  
  render(){
    return(
      <ul>
        {store.getState().todos.map( (todo, idx) => {
          return <li key={idx}>
            <div style={style.input}>{todo.name}</div>
            <span onClick={() => store.dispatch(remove_todo(idx)) } style={style.button}>  x </span>
          </li>
        })}
      </ul>
    )
    

  }
}

const style = {
  input: {
    display: 'inline-block',
    marginRight: '10px'
  },
  button: {
    display: 'inline-block',
    color: 'red',
    cursor: 'pointer'
  }
}