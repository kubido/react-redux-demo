const initialState = {
  users: [{
    id: 1,
    name: "John snow"
  }]
}

const userReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_USER':
      const  newUser = [action.payload.user]
      return {...state, users: state.users.concat(newUser) }
    default:
      return state
  }
}

export default userReducer
