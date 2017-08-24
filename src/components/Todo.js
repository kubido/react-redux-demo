import React, {Component} from 'react'

export default class Todo extends Component {
  
  render(){
    return(
      <ul>
        {this.props.todos.map( (todo, idx) => {
          return <li key={idx}>
            <div style={style.input}>{todo.name}</div>
            <span onClick={() => this.props.udinFunction(idx) } style={style.button}>  x </span>
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