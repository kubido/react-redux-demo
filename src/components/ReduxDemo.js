import React from 'react';
import { connect } from 'react-redux'

import store from '../stores'
import { increment, decrement } from '../actions'
import UserList from './UserList'

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

    const { props } = this
    return(
        <div>
          <h1>Counter: {this.state._counter}</h1>
          <button onClick={() => props.increment() }> INCREMENT </button>
          <button onClick={() => props.decrement() }> DECREMENT </button>

          <UserList/>
        </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment())
  }
}
export default connect(null, mapDispatchToProps)(ReduxDemo)
