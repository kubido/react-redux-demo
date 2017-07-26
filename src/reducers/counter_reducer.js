const initialState = {
  counter: 1
}
export default (state=initialState, action) => {
  console.log(action)
  console.log(state)
  switch(action.type){
    case 'INC':
      return {...state, counter: state.counter + action.payload.langkah}
    case 'DEC':
      return {...state, counter: state.counter - action.payload.langkah}
    default:
      return state
  }
}
