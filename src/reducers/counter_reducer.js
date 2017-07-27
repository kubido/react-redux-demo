const initialState = {
  counter: 1,
  news: [{
    title: "Default title"
  }]
}
export default (state=initialState, action) => {
  console.log(action)
  console.log(state)
  switch(action.type){
    case 'INC':
      return {...state, counter: state.counter + action.payload.langkah}
    case 'DEC':
      return {...state, counter: state.counter - action.payload.langkah}
    case 'FETCH_NEWS':
      return {...state, news: action.payload.news}
    default:
      return state
  }
}
