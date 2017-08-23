const initialState = {
  counter: 0,
  step: 1
}

const CounterReducer = (state=initialState, action) => {
  switch(action.type){
    case 'TAMBAH':
      return {...state, counter: state.counter + action.payload.step}
    case 'KURANG':
      return {...state, counter: state.counter - action.payload.step}
    case 'UPDATE_STEP':
      return {...state, step: action.payload.step }
    default:
      return state
  }
}

export default CounterReducer
