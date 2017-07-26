import React from 'react';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'


export default class Config extends React.Component{
  constructor(){
    super();
    this.state = {
      counter: 1
    }
  }

  render(){
    const reducer = (state, action) => {
      if(action.type === "INC"){
        state = state + 1
      }else if(action.type === "DEC"){
        state = state - 1 
      }
      return state
    }

    const middleMan = ({getState}) => {
      console.log('----------------I am middleman')
    }

    const middleware = applyMiddleware(middleMan)
    const store = createStore(reducer, this.state.counter, middleware)

    store.subscribe( () => {
      const state = store.getState()
      console.log('-----------store change: ', state)
      this.setState({counter: state})
    })

    return(
      <Provider store={store}>
        <h1> Counter: {this.state.counter} </h1>
        <button
          style={styles.button}
          onClick={() => store.dispatch({type: "INC", payload: "1"})} >
          Increment
        </button>
        <button
          style={styles.button}
          onClick={() => store.dispatch({type: "DEC", payload: "1"})} >
        >
          Decrement
        </button>
      </Provider>
    )
  }

}

const styles = {
  button: {
    background: 'aliceblue',
    border: '1px solid cadetblue',
    padding: '10px 15px',
    marginRight: '10px'
  }
}
