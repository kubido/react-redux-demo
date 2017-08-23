import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, update_step} from '../actions/CounterActions'

const Button = (props) => {
  return(
    <div>
      <h3>{props.penghitung}</h3>
      <br/>
      <select name="param_step" onChange={(e) => props.updateStep(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
      </select>
      <button onClick={() => props.increment(props.langkah) }> Increment </button>
      <button onClick={() => props.decrement(props.langkah) }> Decrement </button>
  </div>
  )
}

//store.getState().counterStore.counter

const mapStateToProps = (state) => {
  return {
    penghitung: state.counterStore.counter,
    langkah: state.counterStore.step
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (step) => dispatch(increment(step) ),
    decrement: (step) => dispatch(decrement(step) ),
    updateStep: (step) => dispatch(update_step(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)

