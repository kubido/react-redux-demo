import React from 'react';
import { Provider } from 'react-redux'

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

    return(
      <Provider store={store}>
        <div>
          <h1>Counter: {this.state._counter}</h1>
          <button onClick={() => store.dispatch(increment) }> INCREMENT </button>
          <button onClick={() => store.dispatch(decrement) }> DECREMENT </button>

          <UserList/>
        </div>

      </Provider>
    )
  }
}

export default ReduxDemo
