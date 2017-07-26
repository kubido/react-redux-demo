import React from 'react';

import store from '../stores'
import { increment, decrement } from '../actions'

class ReduxDemo extends React.Component{

  constructor(){
    super()
    this.state = {
      _counter: 1
    }
    store.subscribe(this.updateCounter)
  }

  updateCounter = () => {
    const { stateCounter } = store.getState()
    this.setState({_counter: stateCounter.counter })
  }

  render(){

    return(
      <div>
        <h1>Counter: {this.state._counter}</h1>
        <button onClick={() => store.dispatch(increment) }> INCREMENT </button>
        <button onClick={() => store.dispatch(decrement) }> DECREMENT </button>
      </div>
    )
  }
}

export default ReduxDemo
